WiFi Orientation Tracker

Setup:
- Raspian OS Jessie
- 802.11n USB WiFi Card (supporting master mode)
- For auto run at startup add headTracker to init.d (as root):
  
  ```
    cp headTracker /etc/init.d
    chmod 755 /etc/init.d/headTracker
    update-rc.d headTracker defaults
  ```
