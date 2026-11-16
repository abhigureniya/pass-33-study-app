PASS-33 STUDY APP  (CBSE Class X & XII, session 2026-27)
=========================================================

WHAT IT IS
A study website that runs on your own computer with Python. No internet and
no extra installs are needed. It holds all 12 subject packs:
  Class X : Maths (041/241), Science, Social Science, English, Hindi A & B
  Class XII: Physics, Chemistry, Maths, Biology, Computer Science,
             English Core, Hindi Core

HOW TO START (Windows)
1. Unzip the folder anywhere (e.g. Desktop).
2. Double-click  "Start Study App.bat".
   Your browser opens at http://localhost:8033
   Keep the black window open while studying; close it to stop.
   (Needs Python 3.8 or newer: https://www.python.org/downloads/ )

SHARE WITH A WHOLE CLASS
Double-click "Share on Classroom WiFi.bat". The window shows an address like
http://192.168.1.20:8033 . Students on the same Wi-Fi type it into their phone
or laptop browser. Allow Python through Windows Firewall if asked.
Each student's progress is saved on their own device.

Mac / Linux:  ./start.sh      (or:  python3 app.py --lan )
Other options: python app.py --port 9000 --no-browser

WHAT STUDENTS CAN DO
- Study: every section of each pack, with a chapter list on the left.
- Question cards: answers stay hidden until "Show answer" is tapped, so
  students test themselves first. "Learned" marks a card as done.
- Filters: "Most asked" (starred) questions only, or only ones not yet learned.
- Practice: a flash-card quiz (10, 20 or all questions) with a score at the end.
- Search across all subjects (English and Hindi).
- Progress bars per subject, dark mode, bigger/smaller text, PDF of each pack.

UPDATING THE CONTENT (teachers)
The packs are plain Markdown files in the "source" folder. After editing one:
    pip install markdown
    python tools/build_content.py
Then restart the app.
Note: in Physics and Biology, "most asked" means the question appeared in two
or more board years (those packs list years instead of stars).
