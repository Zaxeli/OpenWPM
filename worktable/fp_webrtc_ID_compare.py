# The screenshot and webRTC data can be found in ../datadir

"""
Source: https://stackoverflow.com/questions/1119722/base-62-conversion
"""

BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

def encode(num, alphabet):
    """Encode a positive number into Base X and return the string.

    Arguments:
    - `num`: The number to encode
    - `alphabet`: The alphabet to use for encoding
    """
    if num == 0:
        return alphabet[0]
    arr = []
    arr_append = arr.append  # Extract bound-method for faster access.
    _divmod = divmod  # Access to locals is faster.
    base = len(alphabet)
    while num:
        num, rem = _divmod(num, base)
        arr_append(alphabet[rem])
    arr.reverse()
    return ''.join(arr)

def decode(string, alphabet=BASE62):
    """Decode a Base X encoded string into the number

    Arguments:
    - `string`: The encoded string
    - `alphabet`: The alphabet to use for decoding
    """
    base = len(alphabet)
    strlen = len(string)
    num = 0

    idx = 0
    for char in string:
        power = (strlen - (idx + 1))
        num += alphabet.index(char) * (base ** power)
        idx += 1

    return num



fpjs_ID = "fm1u9Rm7YtuG5BawlDnp" # ID taken from screenshot
# is base62 encoded
# length: 20 chars

webRTC_ID = "BC:E5:7A:5E:4B:95:3C:30:0F:DB:4D:40:7F:EC:E1:2C:F9:F5:5D:7A:72:0B:58:77:84:70:DC:CB:EF:E4:1D:BD" # ID taken from SQL log of webRTC API 'git remove'
webRTC_ID_arr = webRTC_ID.split(":")
rtc_ID = '0x' + ''.join(webRTC_ID_arr) # 0xBCE57A5E4B953C300FDB4D407FECE12CF9F55D7A720B58778470DCCBEFE41DBD
# is a result of SHA-256 hash => bytes
# length: 32 bytes long 


"""
Comparing the two IDs
"""

# Decode fpjs_ID as integer
fpjs_ID_decoded = decode(fpjs_ID, BASE62) # as integer: 174460975420164749799536384710422303 | length: 36 integers

# Encode rtc_ID as base62
x = int(rtc_ID[2:], 16)
rtc_ID_encoded = encode(x, BASE62) # as base62: INaSO4EMw3TYsMRV4C503Y3UYu20KEbiSbyNh2oDozr | length: 43 symbols

