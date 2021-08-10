# The screenshot and webRTC data can be found in ../datadir
fpjs_ID = "fm1u9Rm7YtuG5BawlDnp" # ID taken from screenshot
webRTC_ID = "BC:E5:7A:5E:4B:95:3C:30:0F:DB:4D:40:7F:EC:E1:2C:F9:F5:5D:7A:72:0B:58:77:84:70:DC:CB:EF:E4:1D:BD" # ID taken from SQL log of webRTC API 'RTCPeerConnection.setLocalDescription'

webRTC_ID_arr = webRTC_ID.split(":")


print(webRTC_ID_arr)