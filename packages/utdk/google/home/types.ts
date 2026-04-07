export type GoogleHomeClient = {
  /**
   * Accessibility
   * Tags: Assistant
   * Access as: google/home.accessibility(input)
   */
  accessibility: (input: { endpoint_enabled: boolean; hotword_enabled: boolean }) => Promise<{ endpoint_enabled: boolean; hotword_enabled: boolean }>;
  /**
   * Alarm Volume
   * Tags: Assistant
   * Access as: google/home.alarmVolume(input)
   */
  alarmVolume: (input: { volume: number }) => Promise<{ volume: number }>;
  /**
   * App Device ID
   * Tags: Device Info
   * Access as: google/home.appDeviceId(input)
   */
  appDeviceId: (input: { app_id: string }) => Promise<{ app_device_id: string; certificate: string; signed_data: string }>;
  /**
   * Change Discoverability
   * Tags: Bluetooth
   * Access as: google/home.changeDiscoverability(input)
   */
  changeDiscoverability: (input: { enable_discovery: boolean }) => Promise<{ [key: string]: unknown }>;
  /**
   * Check Ready Status
   * Tags: Device Info
   * Access as: google/home.checkReadyStatus(input)
   */
  checkReadyStatus: (input: { play_ready_message: boolean; user_id: string }) => Promise<{ can_enroll: boolean; enrollment_state: number; error_code: number; ready: boolean; retryable: boolean }>;
  /**
   * Chromecast Icon
   * Tags: Static Files
   * Access as: google/home.chromecastIcon()
   */
  chromecastIcon: () => Promise<unknown>;
  /**
   * Connect to Wi-Fi Network
   * Tags: Wifi
   * Access as: google/home.connecttoWiFiNetwork(input)
   */
  connecttoWiFiNetwork: (input: { bssid: string; enc_passwd: string; signal_level: number; ssid: string; wpa_auth: number; wpa_cipher: number }) => Promise<unknown>;
  /**
   * Delete Alarms and Timers
   * Tags: Assistant
   * Access as: google/home.deleteAlarmsandTimers(input)
   */
  deleteAlarmsandTimers: (input: { ids: (string)[] }) => Promise<{ success: boolean }>;
  /**
   * Do Not Disturb
   * Tags: Assistant
   * Access as: google/home.doNotDisturb(options)
   */
  doNotDisturb: (options: { headers: { "Content-Type": string } }) => Promise<{ notifications_enabled: boolean }>;
  /**
   * Eureka Info
   * Tags: Device Info
   * Access as: google/home.eurekaInfo(input)
   */
  eurekaInfo: (input: { params: string; options: string; nonce: number }) => Promise<{ aogh: { aogh_api_version: string }; audio: { digital: boolean }; build_info: { build_type: number; cast_build_revision: string; cast_control_version: number; preview_channel_state: number; release_track: string; system_build_number: string }; detail: { icon_list: ({ depth: number; height: number; mimetype: string; url: string; width: number })[]; locale: { display_string: string }; timezone: { display_string: string; offset: number } }; device_info: { "4k_blocked": number; capabilities: { aogh_supported: boolean; assistant_supported: boolean; audio_hdr_supported: boolean; audio_surround_mode_supported: boolean; ble_supported: boolean; bluetooth_audio_sink_supported: boolean; bluetooth_audio_source_supported: boolean; bluetooth_supported: boolean; cloudcast_supported: boolean; content_filters_supported: boolean; display_supported: boolean; fdr_supported: boolean; hdmi_prefer_50hz_supported: boolean; hdmi_prefer_high_fps_supported: boolean; hotspot_supported: boolean; https_setup_supported: boolean; input_management_supported: boolean; keep_hotspot_until_connected_supported: boolean; multi_user_supported: boolean; multichannel_group_supported: boolean; multizone_supported: boolean; night_mode_supported: boolean; night_mode_supported_v2: boolean; opencast_supported: boolean; preview_channel_supported: boolean; reboot_supported: boolean; remote_ducking_supported: boolean; separate_tts_volume_supported: boolean; setup_supported: boolean; sleep_mode_supported: boolean; stats_supported: boolean; system_sound_effects_supported: boolean; user_eq_supported: boolean; wifi_auto_save_supported: boolean; wifi_regulatory_domain_locked: boolean; wifi_supported: boolean }; cloud_device_id: string; factory_country_code: string; hotspot_bssid: string; local_authorization_token_hash: string; mac_address: string; manufacturer: string; model_name: string; product_name: string; public_key: string; ssdp_udn: string; uma_client_id: string; uptime: number; weave_device_id: string }; multizone: { audio_output_delay: number; audio_output_delay_hdmi: number; audio_output_delay_oem: number; aux_in_group: string; dynamic_groups: (string)[]; groups: (string)[]; multichannel_status: number }; name: string; net: { ethernet_connected: boolean; ip_address: string; online: boolean }; night_mode_params: { device_override_do_not_disturb: number; do_not_disturb: boolean; enabled: boolean; led_brightness: number; volume: number; windows: ({ days: (number)[]; length_hours: number; start_hour: number })[] }; opencast: { pin_code: string }; opt_in: { audio_hdr: boolean; audio_surround_mode: number; autoplay_on_signal: boolean; cloud_ipc: boolean; hdmi_prefer_50hz: boolean; hdmi_prefer_high_fps: boolean; managed_mode: boolean; opencast: boolean; preview_channel: boolean; remote_ducking: boolean; stats: boolean; ui_flipped: boolean; wpa3_support_enabled: boolean }; proxy: { mode: string }; settings: { closed_caption: { [key: string]: unknown }; control_notifications: number; country_code: string; locale: string; network_standby: number; system_sound_effects: boolean; time_format: number; timezone: string; wake_on_cast: number }; setup: { qr_ssid_suffix: string; setup_state: number; ssid_suffix: string; stats: { num_check_connectivity: number; num_connect_wifi: number; num_connected_wifi_not_saved: number; num_initial_eureka_info: number; num_obtain_ip: number }; tos_accepted: boolean }; sign: { certificate: string; intermediate_certs: (string)[]; nonce: string; signed_data: string }; user_eq: { high_shelf: { frequency: number; gain_db: number; quality: number }; low_shelf: { frequency: number; gain_db: number; quality: number }; max_peaking_eqs: number; peaking_eqs: (string)[] }; version: number; wifi: { bssid: string; has_changes: boolean; noise_level: number; signal_level: number; ssid: string; wpa_configured: boolean; wpa_id: number; wpa_state: number } }>;
  /**
   * Forget paired device
   * Tags: Bluetooth
   * Access as: google/home.forgetpaireddevice(input)
   */
  forgetpaireddevice: (input: { bond: boolean; mac_address: string }) => Promise<{ [key: string]: unknown }>;
  /**
   * Forget Wi-Fi Network
   * Tags: Wifi
   * Access as: google/home.forgetWiFiNetwork(input)
   */
  forgetWiFiNetwork: (input: { wpa_id: number }) => Promise<{ [key: string]: unknown }>;
  /**
   * Get Alarms and Timers
   * Tags: Assistant
   * Access as: google/home.getAlarmsandTimers()
   */
  getAlarmsandTimers: () => Promise<{ alarm: ({ date_pattern: { day: number; month: number; year: number }; fire_time: number; id: string; status: number; time_pattern: { hour: number; minute: number; second: number } })[]; timer: ({ fire_time: number; id: string; original_duration: number; status: number })[] }>;
  /**
   * Get Paired Devices
   * Tags: Bluetooth
   * Access as: google/home.getPairedDevices()
   */
  getPairedDevices: () => Promise<({ bond_date: number; device_class: number; device_type: number; last_connect_date: number; mac_address: string; name: string; rssi: number; service_uuids: (string)[] })[]>;
  /**
   * Get Saved Networks
   * Tags: Wifi
   * Access as: google/home.getSavedNetworks()
   */
  getSavedNetworks: () => Promise<({ ssid: string; wpa_auth: number; wpa_cipher: number; wpa_id: number })[]>;
  /**
   * Get Scan Results
   * Tags: Bluetooth
   * Access as: google/home.getScanResults()
   */
  getScanResults: () => Promise<({ device_class: number; device_type: number; expected_profiles: number; mac_address: string; name: string; rssi: number })[]>;
  /**
   * Get Wi-Fi Scan Results
   * Tags: Wifi
   * Access as: google/home.getWiFiScanResults()
   */
  getWiFiScanResults: () => Promise<({ bssid: string; signal_level: number; ssid: string; wpa_auth: number; wpa_cipher: number; wpa_id: number })[]>;
  /**
   * Legal Notice
   * Tags: Static Files
   * Access as: google/home.legalNotice()
   */
  legalNotice: () => Promise<string>;
  /**
   * Locales
   * Tags: Device Info
   * Access as: google/home.locales()
   */
  locales: () => Promise<({ display_string: string; locale: string })[]>;
  /**
   * Night Mode settings
   * Tags: Device Settings
   * Access as: google/home.nightModesettings(input)
   */
  nightModesettings: (input: { demo_to_user: boolean; do_not_disturb: boolean; enabled: boolean; led_brightness: number; volume: number; windows: ({ days: (number)[]; length_hours: number; start_hour: number })[] }) => Promise<{ do_not_disturb: boolean; enabled: boolean; led_brightness: number; volume: number; windows: ({ days: (number)[]; length_hours: number; start_hour: number })[] }>;
  /**
   * Offer
   * Tags: Device Info
   * Access as: google/home.offer()
   */
  offer: () => Promise<{ token: string }>;
  /**
   * Pair with Speaker
   * Tags: Bluetooth
   * Access as: google/home.pairwithSpeaker(input)
   */
  pairwithSpeaker: (input: { connect: boolean; mac_address: string; profile: number }) => Promise<{ [key: string]: unknown }>;
  /**
   * Reboot and Factory Reset
   * Tags: Device Settings
   * Access as: google/home.rebootandFactoryReset(input)
   */
  rebootandFactoryReset: (input: { params: string }) => Promise<{ [key: string]: unknown }>;
  /**
   * Scan for devices
   * Tags: Bluetooth
   * Access as: google/home.scanfordevices(input)
   */
  scanfordevices: (input: { clear_results: boolean; enable: boolean; timeout: number }) => Promise<{ [key: string]: unknown }>;
  /**
   * Scan for Networks
   * Tags: Wifi
   * Access as: google/home.scanforNetworks()
   */
  scanforNetworks: () => Promise<{ [key: string]: unknown }>;
  /**
   * Set Equalizer Values
   * Tags: Assistant
   * Access as: google/home.setEqualizerValues(input)
   */
  setEqualizerValues: (input: { high_shelf: { gain_db: number }; low_shelf: { gain_db: number } }) => Promise<{ [key: string]: unknown }>;
  /**
   * Set Eureka Info
   * Tags: Device Settings
   * Access as: google/home.setEurekaInfo(input)
   */
  setEurekaInfo: (input: { name: string; opt_in: { opencast: boolean; preview_channel: boolean; remote_ducking: boolean; stats: boolean }; settings: { control_notifications: number } }) => Promise<{ [key: string]: unknown }>;
  /**
   * Status
   * Tags: Bluetooth
   * Access as: google/home.status()
   */
  status: () => Promise<{ audio_mode: number; connected_devices: ({ device: { bond_date: number; device_class: number; device_type: number; last_connect_date: number; mac_address: string; name: string; rssi: number; service_uuids: (string)[] }; enabled_profiles: number })[]; connecting_devices: (string)[]; discovery_enabled: boolean; remote_sink: { bond_date: number; device_class: number; device_type: number; last_connect_date: number; mac_address: string; name: string; rssi: number; service_uuids: (string)[] }; scanning_enabled: boolean }>;
  /**
   * Test Internet Download Speed
   * Tags: Device Info
   * Access as: google/home.testInternetDownloadSpeed(input)
   */
  testInternetDownloadSpeed: (input: { url: string }) => Promise<{ bytes_received: number; response_code: number; time_for_data_fetch: number; time_for_http_response: number }>;
  /**
   * Timezones
   * Tags: Device Info
   * Access as: google/home.timezones()
   */
  timezones: () => Promise<({ display_string: string; offset: number; timezone: string })[]>;
};
