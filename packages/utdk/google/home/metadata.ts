import type { ToolRuntimeMetadataMap } from "../../client.js";

export const toolMetadata = {
  "LegalNotice": {
    "accessPath": [
      "legalNotice"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/setup/NOTICE.html.gz",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "Accessibility": {
    "accessPath": [
      "accessibility"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "endpoint_enabled",
      "hotword_enabled"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/setup/assistant/a11y_mode",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "GetAlarmsandTimers": {
    "accessPath": [
      "getAlarmsandTimers"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/setup/assistant/alarms",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "DeleteAlarmsandTimers": {
    "accessPath": [
      "deleteAlarmsandTimers"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "ids"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/setup/assistant/alarms/delete",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "AlarmVolume": {
    "accessPath": [
      "alarmVolume"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "volume"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/setup/assistant/alarms/volume",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "CheckReadyStatus": {
    "accessPath": [
      "checkReadyStatus"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "play_ready_message",
      "user_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/setup/assistant/check_ready_status",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "DoNotDisturb": {
    "accessPath": [
      "doNotDisturb"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [
      "Content-Type"
    ],
    "httpMethod": "POST",
    "pathTemplate": "/setup/assistant/notifications",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "NightModesettings": {
    "accessPath": [
      "nightModesettings"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "demo_to_user",
      "do_not_disturb",
      "enabled",
      "led_brightness",
      "volume",
      "windows"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/setup/assistant/set_night_mode_params",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "Forgetpaireddevice": {
    "accessPath": [
      "forgetpaireddevice"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "bond",
      "mac_address"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/setup/bluetooth/bond",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "PairwithSpeaker": {
    "accessPath": [
      "pairwithSpeaker"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "connect",
      "mac_address",
      "profile"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/setup/bluetooth/connect",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "ChangeDiscoverability": {
    "accessPath": [
      "changeDiscoverability"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "enable_discovery"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/setup/bluetooth/discovery",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "GetPairedDevices": {
    "accessPath": [
      "getPairedDevices"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/setup/bluetooth/get_bonded",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "Scanfordevices": {
    "accessPath": [
      "scanfordevices"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "clear_results",
      "enable",
      "timeout"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/setup/bluetooth/scan",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "GetScanResults": {
    "accessPath": [
      "getScanResults"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/setup/bluetooth/scan_results",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "Status": {
    "accessPath": [
      "status"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/setup/bluetooth/status",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "GetSavedNetworks": {
    "accessPath": [
      "getSavedNetworks"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/setup/configured_networks",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "ConnecttoWi-FiNetwork": {
    "accessPath": [
      "connecttoWiFiNetwork"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "bssid",
      "enc_passwd",
      "signal_level",
      "ssid",
      "wpa_auth",
      "wpa_cipher"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/setup/connect_wifi",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "EurekaInfo": {
    "accessPath": [
      "eurekaInfo"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/setup/eureka_info",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": [
      "params",
      "options",
      "nonce"
    ]
  },
  "ForgetWi-FiNetwork": {
    "accessPath": [
      "forgetWiFiNetwork"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "wpa_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/setup/forget_wifi",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "AppDeviceID": {
    "accessPath": [
      "appDeviceId"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "app_id"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/setup/get_app_device_id",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "ChromecastIcon": {
    "accessPath": [
      "chromecastIcon"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/setup/icon.png",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "Offer": {
    "accessPath": [
      "offer"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/setup/offer",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "RebootandFactoryReset": {
    "accessPath": [
      "rebootandFactoryReset"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "params"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/setup/reboot",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "GetWi-FiScanResults": {
    "accessPath": [
      "getWiFiScanResults"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/setup/scan_results",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "ScanforNetworks": {
    "accessPath": [
      "scanforNetworks"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/setup/scan_wifi",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "SetEurekaInfo": {
    "accessPath": [
      "setEurekaInfo"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "name",
      "opt_in",
      "settings"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/setup/set_eureka_info",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "Locales": {
    "accessPath": [
      "locales"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/setup/supported_locales",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "Timezones": {
    "accessPath": [
      "timezones"
    ],
    "bodyKind": "none",
    "bodyPropertyKeys": [],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "GET",
    "pathTemplate": "/setup/supported_timezones",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "TestInternetDownloadSpeed": {
    "accessPath": [
      "testInternetDownloadSpeed"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "url"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/setup/test_internet_download_speed",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  },
  "SetEqualizerValues": {
    "accessPath": [
      "setEqualizerValues"
    ],
    "bodyKind": "properties",
    "bodyPropertyKeys": [
      "high_shelf",
      "low_shelf"
    ],
    "contentType": "application/json",
    "headerParameterKeys": [],
    "httpMethod": "POST",
    "pathTemplate": "/setup/user_eq/set_equalizer",
    "pathConflictKeys": [],
    "pathParameterKeys": [],
    "queryConflictKeys": [],
    "queryParameterKeys": []
  }
} satisfies ToolRuntimeMetadataMap;
