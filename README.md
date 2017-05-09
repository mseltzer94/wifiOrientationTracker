WiFi Orientation Tracker

Provides a low latency wireless communication over WebSockets (using Socket.io) for head tracking data from the MPU-6050 chipset.

Setup:
- RRaspberry Pi Zero W or Raspberry Pi with compatible WiFi usb card
- Install NOOBS on Raspberry Pi, update Node.js to latest version
- To setup WiFi, run script from https://gist.github.com/Lewiscowles1986/fecd4de0b45b2029c390 (note that password MUST BE at least 8 characters)
- install forever.js (from https://github.com/foreverjs/forever)

- For auto run at startup add headTracker (in root of this project) to init.d (as root):
  
  ```
    cp headTracker /etc/init.d
    chmod 755 /etc/init.d/headTracker
    update-rc.d headTracker defaults
  ```


