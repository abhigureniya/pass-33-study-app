@echo off
title Pass-33 Study App (classroom Wi-Fi)
cd /d "%~dp0"
where py >nul 2>nul && (py -3 app.py --lan) || (python app.py --lan)
pause
