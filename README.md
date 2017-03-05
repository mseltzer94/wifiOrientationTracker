WiFi Orientation Tracker

Setup:
- Raspian OS Jessie
- 802.11n USB WiFi Card (supporting master mode)
- For auto run at startup add this as a task to crontab (by running sudo crontab -u root -)
@reboot /usr/bin/forever start /home/pi/Downloads/wifiOrientationTracker/server.js
