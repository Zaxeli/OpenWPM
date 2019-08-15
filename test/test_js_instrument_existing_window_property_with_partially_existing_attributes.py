from __future__ import absolute_import

import re

from ..automation.utilities import db_utils
from . import utilities as util
from .openwpmtest import OpenWPMTest

GETS_AND_SETS = {
    ("", "get", "{\"existingProp\":\"foo\"}"),
    ("", "get", "{\"existingProp\":\"foo\"}"),
    ("", "get", "{\"existingProp\":\"foo\"}"),
    ("", "get", "{\"existingProp\":\"foo\"}"),
    (".existingProp", "get", "foo"),
    ("", "get", "{\"existingProp\":\"foo\"}"),
    (".existingProp", "set", "blah1"),
    ("", "get", "{\"existingProp\":\"blah1\"}"),
    (".existingProp", "get", "blah1"),
    ("", "get", "{\"existingProp\":\"blah1\"}"),
    (".nonExistingProp1", "get", "undefined"),
    ("", "get", "{\"existingProp\":\"blah1\"}"),
    (".nonExistingProp1", "set", "blah1"),
    ("", "get", "{\"existingProp\":\"blah1\"}"),
    (".nonExistingProp1", "get", "blah1"),
    ("", "get", "{\"existingProp\":\"blah1\"}"),  # Note 1
    (".nonExistingMethod1", "get", "undefined"),  # Note 2
}

# Note 1: nonExistingProp1 is not enumerable even after being set
# Note 2: nonExistingMethod1 shows up as a get rather than call

METHOD_CALLS = set()  # Note 2

TEST_PAGE = ("instrument_existing_window_property_"
             "with_partially_existing_attributes.html")
TOP_URL = (
    u"%s/js_instrument/%s" % (util.BASE_TEST_URL, TEST_PAGE)
)


class TestJSInstrumentExistingWindowPropertyWithPartiallyExistingAttributes(OpenWPMTest):

    def get_config(self, data_dir=""):
        manager_params, browser_params = self.get_test_config(data_dir)
        browser_params[0]['js_instrument'] = True
        manager_params['testing'] = True
        return manager_params, browser_params

    def _check_calls(self, rows, symbol_prefix, doc_url, top_url):
        """Helper to check method calls and accesses in each frame"""
        observed_gets_and_sets = set()
        observed_calls = set()
        for row in rows:
            if not row['symbol'].startswith(symbol_prefix):
                continue
            symbol = re.sub(symbol_prefix, '', row['symbol'])
            assert row['document_url'] == doc_url
            assert row['top_level_url'] == top_url
            if row['operation'] == 'get' or row['operation'] == 'set':
                observed_gets_and_sets.add(
                    (symbol, row['operation'], row['value'])
                )
            else:
                observed_calls.add(
                    (symbol, row['operation'], row['arguments'])
                )
        assert observed_calls == METHOD_CALLS
        assert observed_gets_and_sets == GETS_AND_SETS

    def test_instrument_object(self):
        """ Ensure instrumentObject logs all property gets, sets, and calls """
        db = self.visit('/js_instrument/%s' % TEST_PAGE)
        rows = db_utils.get_javascript_entries(db, all_columns=True)

        # Check calls of non-recursive instrumentation
        self._check_calls(rows, 'window.partiallyExisting', TOP_URL, TOP_URL)
