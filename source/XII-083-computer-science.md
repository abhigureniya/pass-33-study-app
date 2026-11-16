# CBSE Class XII Computer Science (083): Pass Pack 2026-27

**Who this is for:** students who need to **pass**, meaning at least 33% in theory and 33% in practicals.
**How to use it:** Study the topics in the order given in Section 3. Learn the starred (★) questions in Section 5 first. Then **write** the programs and queries on paper again and again. Reading them is not enough. In the board exam you must write code by hand.

---

## 1. Exam at a glance (2026-27)

| Item | Details |
|---|---|
| Theory paper | 70 marks, 3 hours (plus 15 minutes reading time) |
| Practical exam | 30 marks |
| Total | 100 |
| Number of questions | 37, all compulsory, with internal choice (OR) in some questions |
| Section A | Q1-21: 1 mark each, including MCQs, True/False, fill-ups, "write the output" and 2 Assertion-Reason (A-R) questions = **21 marks** |
| Section B | Q22-28: very short answer, 2 marks each = **14 marks** |
| Section C | Q29-31: short answer, 3 marks each = **9 marks** (usually text file, stack and output/function questions) |
| Section D | Q32-35: 4 marks each = **16 marks** (SQL queries on a table, CSV file, SQL on two tables, Python-MySQL) |
| Section E | Q36-37: 5 marks each = **10 marks** (binary file program, network case study) |
| Language | All programs must be written in **Python** only |
| MCQ rule | Write the **text** of the correct option, not only the letter (for example "c) Error"). |
| **Pass mark (theory)** | **33% of 70 = 23.1, so you need 24 marks** |
| **Pass mark (practical)** | **33% of 30 = 10 marks** |
| Rule | In Class XII you must get 33% **separately** in theory and in practical (CBSE Controller of Examinations FAQ, March 2025). |

**The SQP note says:** "There is no change in the Question Paper Design and Assessment Pattern for Academic Session 2026-27." The pattern (37 questions, 21/7/3/4/2) is the same as the 2025 and 2026 board papers. The 2023 and 2024 papers had 35 questions, but the topics were the same.

**Practical 30 marks break-up (2026-27 curriculum):**

| Part | Marks |
|---|---|
| Lab test: one Python program (60% logic + 20% documentation + 20% code quality) | 8 |
| Lab test: 4 SQL queries on one or two tables | 4 |
| Report file: at least 15 Python programs + at least 5 sets of SQL queries + at least 4 Python-SQL connectivity programs | 7 |
| Project (Python file handling or Python-SQL connectivity, in groups of 2-3) | 8 |
| Viva voce | 3 |

**What is NOT in the 2026-27 syllabus (skip old PYQs on these):** C++, classes and objects (OOP), inheritance, sorting algorithms (bubble/selection sort), queues, infix/postfix, Boolean algebra and K-maps, 3G/4G, cyber security topics (these are now in Class XI). The 2019 paper had these. Only its Python, file, stack, SQL and network questions are useful now.

---

## 2. Unit weightage table (2026-27 curriculum, theory 70)

| Unit | Name | Marks | What it covers |
|---|---|---|---|
| 1 | Computational Thinking and Programming - 2 | **40** | Python revision (strings, lists, tuples, dictionaries), functions and scope, exception handling, text / binary / CSV files, stack using list |
| 2 | Computer Networks | **10** | Evolution (ARPANET, NSFNET, Internet), bandwidth, IP address, switching, transmission media, devices, topologies, PAN/LAN/MAN/WAN, protocols, web services |
| 3 | Database Management | **20** | Relational model terms, keys, SQL (DDL, DML, SELECT, aggregates, GROUP BY, HAVING, joins), Python-MySQL connectivity |
| | **Total** | **70** | |

**Where Unit 1 marks come from (based on the 2026-27 SQP):** about 12 one-mark questions, 5 two-mark questions, all three 3-mark questions, the CSV question (4) and the binary file question (5).
**Unit 2** is almost fixed: about 3-4 one-mark questions, one 2-mark question and the 5-mark case study.
**Unit 3** is also fixed: about 5-6 one-mark questions, one 2-mark question and three 4-mark questions (Q32, Q34, Q35).

---

## 3. The 33-mark plan (target about 43% = 30 marks in theory)

**Main idea:** Computer Science papers repeat the **same types** of questions every year. Only the names and data change. If you learn about 12 "templates" (patterns), you can pass. There is no negative marking, so attempt **every** question. Even half-correct code gets step marks.

### 3a. Study order (easiest and highest return first)

1. **Networks (10 marks):** pure theory with short answers. The 5-mark case study has the **same 5 answers almost every year** (server in the block with most computers, star layout, switch in every block, repeater if distance > 100 m, router/gateway at the server, VoIP/TELNET/FTP, optical fibre or satellite for long distance).
2. **SQL queries (about 16 marks):** SELECT ... WHERE ... ORDER BY ... GROUP BY. These are simple English-like sentences. Learn 15 query patterns (Section 6c).
3. **SQL theory 1-markers:** keys, degree, cardinality, DDL vs DML, COUNT(*) vs COUNT(column).
4. **Python-MySQL connectivity (4 marks):** one fixed 8-line template. Learn it by heart (Section 6c).
5. **Stack program (3 marks):** push with append(), pop with pop(), "Stack Empty"/"Underflow" message. The same every year.
6. **Text file function (3 marks):** open, read, split, loop, count, print, close. One template.
7. **Python output and built-in method questions:** practise 20 outputs from Section 5.
8. **CSV (4) and binary file (5):** learn the two templates. Even writing the open(), writer()/reader() or pickle.dump()/pickle.load() lines correctly gives 1-2 marks.

### 3b. Target-marks table (theory)

| Topic | Marks in paper (approx.) | Target for a weak student | What to learn |
|---|---|---|---|
| Networks (MCQs + 2-mark + case study) | 10 | **6** | Q62-Q72 in Section 5, case study key in 6d |
| SQL queries on tables (Q32, Q34, Section A) | 13 | **6** | Q82-Q87, query patterns 6c |
| SQL theory (keys, degree, DDL/DML, Q27) | 5 | **3** | Q73-Q81 |
| Python-MySQL connectivity (Q35) | 4 | **2** | Q88-Q91, template 6c |
| Stack (Q30) | 3 | **2** | Q58-Q61 |
| Text file (Q29) | 3 | **2** | Q47-Q52 |
| Python output / methods / errors / functions (Section A and B) | about 20 | **7** | Q1-Q46 |
| CSV file (Q33) | 4 | **1** | Q56-Q57 |
| Binary file (Q36) | 5 | **1** | Q53-Q55 |
| **Total** | **about 67** | **30 (43%)** | Pass needs 24, so this gives a **6-mark buffer** |

**Section A:** Of the 21 one-mark questions, about 9 are SQL and networks (easy theory). Aim for **12 correct out of 21**.

### 3c. How practicals save you

- Practical is a separate pass (10/30 needed), but most students get 24-28/30. **Do not lose these marks.**
- **Report file (7) + project (8) + viva (3) = 18 marks** are decided before or on the exam day by your own work. Finish the file and the project in school, get them signed, and know what each program does.
- **SQL lab test (4):** 4 queries on one or two tables. Practise CREATE, INSERT, SELECT with WHERE, ORDER BY, GROUP BY, UPDATE, DELETE on the computer.
- **Python lab test (8):** usually one program from the practical list (text file count, binary search/update, CSV user-id/password, stack, random dice). 60% of marks are logic, 20% comments, 20% neat code. Always write comments (#) and use clear variable names.
- **Viva favourites:** difference between text and binary file; what pickle does; what a primary key is; what commit() does; LIFO; what a switch does; full forms (HTTP, SMTP, VoIP, LAN).

---

## 4. PYQ trend analysis (papers actually read)

**Papers read:** 2019 (Delhi, Code 91, Series BVM; old C++/Python syllabus, only the Python, file, stack, SQL and network parts compared), 2023 (Code 91, Series NHHEFG), 2024 (Code 91, Set 4), 2025 (Code 91, Set 4), 2026 (Code 91, Set 4), plus the **2026-27 SQP**. That is **5 board years + SQP**. The 2015-2018, 2020-2022 papers were **not** read. The 2023-2025 papers were scanned copies read through OCR, so some table data in those papers could not be read; questions that needed that data are left out.

| Topic / question type | Years seen (only papers read) | Times |
|---|---|---|
| Possible outputs with random module (randint / randrange) | 2019, 2023, 2024, 2025, 2026, SQP | 6 |
| Rewrite code after removing errors (underline corrections) | 2019, 2023, 2024, 2025, 2026, SQP | 6 |
| Text file function (count words / digits / lines with a word) | 2019, 2023, 2024, 2025, 2026, SQP | 6 |
| Binary file with pickle (write / search / update) | 2019, 2023, 2024, 2025, 2026, SQP | 6 |
| Stack using list: push and pop functions | 2019, 2023, 2024, 2025, 2026, SQP | 6 |
| Network case study (server, layout, devices, protocol) | 2019, 2023, 2024, 2025, 2026, SQP | 6 |
| SQL queries / output on one table (WHERE, ORDER BY, GROUP BY, LIKE, BETWEEN) | 2019, 2023, 2024, 2025, 2026, SQP | 6 |
| Output of string slicing / string methods (split, partition, index, capitalize) | 2019, 2023, 2024, 2025, 2026, SQP | 6 |
| Function output: local/global scope, default parameters, return | 2019, 2023, 2024, 2025, 2026, SQP | 6 |
| Operator precedence: value of an expression (**, /, //, %) | 2023, 2024, 2025, 2026, SQP | 5 |
| Dictionary: methods / loop over keys / statements (get, pop, update, setdefault) | 2023, 2024, 2025, 2026, SQP | 5 |
| Write one statement using built-in methods only | 2024, 2025, 2026, SQP | 4 |
| CSV file: writer/writerow, reader, count/search/copy | 2023, 2024, 2025, 2026, SQP | 5 |
| File modes, seek()/tell(), with clause | 2019, 2023, 2024, 2026, SQP | 5 |
| Exception handling (try-except-finally output, True/False) | 2024, 2025, 2026, SQP | 4 |
| Python-MySQL connectivity program (insert/update/delete/fetch) | 2023, 2024, 2025, 2026, SQP | 5 |
| SQL on two tables: equi-join / natural join / Cartesian product | 2019, 2023, 2024, 2025, 2026, SQP | 6 |
| Degree, cardinality, Cartesian product size | 2023, 2024, 2025, 2026, SQP | 5 |
| Keys: primary, candidate, alternate, foreign | 2023, 2025, 2026, SQP | 4 |
| DDL vs DML; CREATE / ALTER (add, drop column, primary key) / DROP | 2023, 2024, 2025, 2026, SQP | 5 |
| Aggregates, COUNT(*) vs COUNT(col), NULL / IS NULL | 2019, 2024, 2025, 2026, SQP | 5 |
| Full forms (XML, PPP, HTML, TCP, ARPANET, URL, RJ45) | 2019, 2023, 2024, 2025, 2026 | 5 |
| Protocols (HTTP, SMTP, FTP, VoIP, PPP, TELNET) | 2019, 2023, 2024, 2025, 2026, SQP | 6 |
| Network devices (repeater, switch, gateway, router, NIC/MAC) | 2019, 2023, 2024, 2025, 2026, SQP | 6 |
| Topologies (bus, star, tree) and switching (circuit vs packet) | 2024, 2026, SQP | 3 |
| Transmission media (radio waves, microwaves, wired vs wireless) | 2023, 2026, SQP | 3 |

**What this means for you:** every row with 5-6 years is almost certain to come again. These rows alone carry more than 40 of the 70 marks.

## 5. Must-do question bank (91 questions)

★ = asked many times, so do this first. Years in brackets are board papers (Code 91) where the same question appeared. "SQP" = 2026-27 Sample Paper. "Practice" = a question written in the board style for practice (not from a paper). **Every Python output below was checked by running the code in Python 3.** Every SQL output on the practice table was checked by running the queries.

### Unit 1A: Python revision (strings, lists, tuples, dictionaries, operators)

**Q1 ★ (1 mark, SQP)** Write the output:
```python
L1=[10,20,25,30]
L1.insert(1,15)
print(L1)
```
**Ans:** `[10, 15, 20, 25, 30]`. insert(index, value) puts 15 at index 1 and shifts the rest right.

**Q2 ★ (MCQ, SQP)** Output of:
```python
Msg = "programming is amazing"
print(Msg.split("m"))
```
a) ['progra', '', 'ing is a', 'azing'] b) ['progra', 'ming is a', 'azing'] c) ('progra', '', 'ing is amazing') d) ['program', 'ing is a', 'zing']
**Ans: a) ['progra', '', 'ing is a', 'azing'].** split() always returns a **list**, and the "m" is removed. Two m's side by side ("mm") give an empty string '' between them.

**Q3 ★ (MCQ, 2026)** Output of `s = "the Truth"; print(s.capitalize())`: (A) The truth (B) THE TRUTH (C) The Truth (D) the Truth
**Ans: (A) The truth.** capitalize() makes the first letter capital and **all other letters small**. (title() would give "The Truth".)

**Q4 ★ (MCQ, 2026; same idea 2023)** Output of:
```python
s='War and Peace by Leo Tolstoy'
print(s.partition("by"))
```
**Ans: ('War and Peace ', 'by', ' Leo Tolstoy').** partition() always returns a **tuple of 3 parts**: before, the separator itself, after. Note the spaces stay.
(2023: `"Amrit Mahotsav @ 75".partition(" ")` gives `('Amrit', ' ', 'Mahotsav @ 75')`. It splits only at the **first** space.)

**Q5 ★ (1 mark, 2026, SQP, 2024)** Write the outputs:
(a) `print("PythonProgram"[-1:2:-2])` (2026)
(b) `text = "Drone Expo"; print(text[-2: :-4])` (SQP)
(c) `myStr="MISSISSIPPI"; print(myStr[:4]+"#"+myStr[-5:])` (2024)
**Ans:**
- (a) `mroPo`. Start at the last letter 'm' and move left in steps of 2, stopping before index 2: m, r, o, P, o.
- (b) `peD`. Start at index -2 ('p'), step -4: 'p' (index 8), 'e' (index 4), 'D' (index 0).
- (c) `MISS#SIPPI`. [:4] = first 4 letters; [-5:] = last 5 letters.
**Rule:** s[start:stop:step]. The stop index is **never included**. A negative step moves right to left.

**Q6 ★ (1 mark, SQP, 2025, 2024, 2023)** Find the value of each:
(a) `print(25+100**1**3/5)` (SQP) (b) `print(14%3**2*4)` (2025) (c) `print(16*5/4*2/5-8)` (2024) (d) `print(4+3*5/3-5%2)` (2023)
**Ans:**
- (a) **45.0**. ** is done first and right to left: 1**3 = 1, 100**1 = 100, 100/5 = 20.0, 25 + 20.0 = 45.0
- (b) **20**. 3**2 = 9; then % and * from left to right: 14 % 9 = 5, 5 * 4 = 20
- (c) **0.0**. Left to right: 80/4 = 20.0, ×2 = 40.0, /5 = 8.0, -8 = 0.0
- (d) **8.0**. 3*5 = 15, 15/3 = 5.0, 5%2 = 1, 4 + 5.0 - 1 = 8.0
**Rule:** order is () → ** (right to left) → * / // % (left to right) → + -. The / operator always gives a float (a decimal like 45.0).

**Q7 (MCQ, SQP)** What is the data type of 5 // 2? a) float b) int c) string d) None
**Ans: b) int.** 5 // 2 = 2 (floor division of two integers gives an integer).

**Q8 ★ (MCQ, SQP; A-R 2026)** What happens: `t = (1, 2, 3); l = [4, 5]; print(t + l)`?
**Ans: c) Error, because a tuple cannot be concatenated with a list.** (TypeError.) In 2026 the A-R was: A: [1,2,3]+'123' is an invalid expression. R: A list cannot be concatenated with a string. **Ans: (A)** both true and R explains A.

**Q9 (MCQ, 2026)** Output of:
```python
t = tuple('tuple')
t2 = t[2],
t += t2
print(t)
```
**Ans: ('t', 'u', 'p', 'l', 'e', 'p').** tuple('tuple') splits the word into letters. `t[2],` (with a comma) is a one-element tuple ('p',), which is joined at the end.

**Q10 (MCQ, SQP)** Which of these is mutable? a) Tuple b) String c) Integer d) List
**Ans: d) List.** Mutable = can be changed in place. Lists and dictionaries are mutable; strings, tuples, int, float are immutable.

**Q11 (MCQ, 2023)** Tup = (10, 20, 30, 50). Which statement gives an error? (a) print(Tup[0]) (b) Tup.insert(2,3) (c) print(Tup[1:2]) (d) print(len(Tup))
**Ans: (b) Tup.insert(2,3).** A tuple is immutable, so it has no insert() method.

**Q12 (MCQ, 2026)** L is a list with 6 elements. Which statement raises an exception? (A) L.pop(1) (B) L.pop(6) (C) L.insert(1,6) (D) L.insert(6,1)
**Ans: (B) L.pop(6).** Valid indexes are 0 to 5, so pop(6) gives IndexError. insert() never gives an error for a big index; it just adds at the end.

**Q13 ★ (MCQ, 2025; same idea SQP)** Output of:
```python
D={'S01':95, 'S02':96}
for I in D:
    print(I,end='#')
```
**Ans: (A) S01#S02#.** A for loop over a dictionary gives the **keys** only.
SQP: `Dl={"Pen":12, "Pencil":6, "Scale":5, "InkPen":20}; print(12 in Dl)` gives **False**, because `in` checks keys, not values.

**Q14 (MCQ, 2026)** Which is true about dictionaries? (A) A dictionary is a sequence (B) A dictionary cannot have two elements with the same key (C) ... cannot have two elements with the same value (D) The key and value of an element cannot be the same.
**Ans: (B).** Keys must be unique; values can repeat.

**Q15 (MCQ, 2025; same idea 2023)** Which is a correct identifier? (A) global (B) Break (C) def (D) with
**Ans: (B) Break.** Python is case-sensitive, so Break is not the keyword break. global, def and with are keywords. (2023: the valid keyword out of false, return, non_local, none is **return**.)

**Q16 (MCQ, 2025)** Which operator gives True if the variables on both sides point to the same memory location? (A) is (B) is not (C) and (D) or
**Ans: (A) is.** `is` and `is not` are identity operators.

**Q17 (MCQ, 2026; same idea 2023)** Which expression is True? (A) 2>3 and 2<3 (B) 3>1 and 2 (C) 3>1 and 3>2 (D) 3>1 and 3<2
**Ans: (C) 3>1 and 3>2.** (B) gives 2, not True, because `and` returns the last value it checks. (2023: `5<10 and 12>7 or not 7>4` gives **True**.)

**Q18 (True/False, 2026; same idea 2025)** "In Python, the data type of 74 is the same as the data type of 74.0." / (2025) "A Python list must always contain all its elements of the same data type."
**Ans: Both False.** 74 is int and 74.0 is float. A list can hold mixed types, like [1, "a", 2.5].

**Q19 ★ (2 marks, SQP)** Using built-in methods only: (I) check whether the string username starts with "admin". (II) data = [2, 7, 9, 9, 2]: count how many times the largest element occurs.
**Ans:** (I) `username.startswith("admin")` (II) `data.count(max(data))` (gives 2)

**Q20 ★ (2 marks, 2026)** Using built-in functions/methods only: (i) make a new list L1 with the elements of L in ascending order, without changing L. (ii) check whether the character ch is an alphabet or a number.
**Ans:** (i) `L1 = sorted(L)` (sorted() returns a new list; L.sort() would change L itself). (ii) `ch.isalnum()`

**Q21 ★ (2 marks, 2025)** D={"Suman":40, "Raj":55, "Raman":60} and D1={"Aditi":30, "Amit":90, "Raj":20}. Write statements to: (i)(a) display the value of key "Raj" in D (b) display the length of D1 (ii)(a) add all key-value pairs of D to D1 (b) delete the item with key "Amit" from D1.
**Ans:**
- (i)(a) `print(D["Raj"])` or `print(D.get("Raj"))` (gives 55) (b) `print(len(D1))` (gives 3)
- (ii)(a) `D1.update(D)` (b) `D1.pop("Amit")` or `del D1["Amit"]`

**Q22 (2 marks, 2026; same idea 2024)** D1 is a dictionary. (i)(a) check if key 'RNo' is present (b) check if any key has the value 12 (ii)(a) one statement using a built-in function: add 'RNo':12 if 'RNo' is not present; if present, return its value (b) delete all elements of D1.
**Ans:** (i)(a) `'RNo' in D1` (b) `12 in D1.values()` (ii)(a) `D1.setdefault('RNo', 12)` (b) `D1.clear()`
(2024: remove key "NISHA" from Students: `Students.pop("NISHA")`; count "is" in message: `message.count("is")`, which gives 3 for "This is his book".)

**Q23 ★ (2 marks, SQP)** Predict the output:
```python
code = "gLaD5"
result = []
i=0
while i < len(code):
    if code[i].isupper():
        result.append(code[i].lower())
    elif code[i].isdigit():
        result.append(int(code[i]) * 2)
    else:
        result.append("#")
    i += 1
print(result)
```
**Ans:** `['#', 'l', '#', 'd', 10]`
Working: g (small) → '#'; L (capital) → 'l'; a → '#'; D → 'd'; 5 (digit) → 5×2 = 10 (an integer, so no quotes).

**Q24 ★ (2 marks, 2024)** Output:
```python
LS=["HIMALAYA", "NILGIRI", "ALASKA", "ALPS"]
D={}
for S in LS:
    if len(S)%4 == 0:
        D[S] = len(S)
for K in D:
    print(K,D[K], sep = "#")
```
**Ans:**
```
HIMALAYA#8
ALPS#4
```
Lengths are 8, 7, 6, 4. Only 8 and 4 are divisible by 4.

**Q25 ★ (3 marks, 2024)** Output:
```python
S="Racecar Car Radar"
L=S.split()
for W in L:
    x=W.upper()
    if x==x[::-1]:
        for I in x:
            print(I,end="*")
    else:
        for I in W:
            print(I,end="#")
    print()
```
**Ans:**
```
R*A*C*E*C*A*R*
C#a#r#
R*A*D*A*R*
```
RACECAR and RADAR are palindromes (same when reversed), so they print in capitals with *. "Car" is not, so it prints as it is with #.

**Q26 (3 marks, 2025)** Output:
```python
def ExamOn(mystr):
    newstr = ""
    count = 0
    for i in mystr:
        if count%2 != 0:
            newstr = newstr + str(count-1)
        else:
            newstr = newstr + i.lower()
        count += 1
    newstr = newstr + mystr[:2]
    print("The new string is:", newstr)
ExamOn("GenX")
```
**Ans:** `The new string is: g0n2Ge`
Working: count 0 → 'g'; count 1 (odd) → str(0) = '0'; count 2 → 'n'; count 3 → '2'; then add mystr[:2] = 'Ge'.

**Q27 (3 marks, 2026)** Output:
```python
def Exam2026(given):
    new=[]
    for ch in given[1:-1]:
        if ch.isupper():
            new.reverse()
        elif ch not in new:
            new.append(ch)
        elif ch in new:
            new.pop()
    print(new)
Exam2026("Gold-24Medals")
```
**Ans:** `['4', '2', '-', 'd', 'l', 'o']`
Working: given[1:-1] = "old-24Medal". Add o, l, d, -, 2, 4. 'M' is capital → reverse the list → ['4','2','-','d','l','o']. 'e' is new → add it. 'd' is already in the list → pop() removes the **last** item ('e'). 'a' → add. 'l' is in the list → pop() removes 'a'. (The printed paper uses a dash between "Gold" and "24"; the answer has that same character.)

**Q28 (3 marks, 2026)** Output:
```python
def Exam2026(given):
    new = 0
    while given:
        if new % 2:
            new += given % 10
        else:
            new += given % 5
        print(new, end='-')
        given //= 10
Exam2026(123456)
```
**Ans:** `1-6-10-13-15-16-`
Working (given, new): 123456: new=0 is even → +123456%5=1 → 1. 12345: new=1 odd → +5 → 6. 1234: 6 even → +1234%5=4 → 10. 123: even → +3 → 13. 12: odd → +2 → 15. 1: odd → +1 → 16. Then given becomes 0 and the loop stops.

### Unit 1B: Error finding (2 marks, asked every year)

**Q29 ★ (2 marks, SQP)** Remove the errors and underline the corrections (the code should print the list in reverse):
```python
words=["Class Test","Term Exams","Pre-board Exam","Board Exam’]
L=len(words)
for i in range(L, -1, -1)
    Print (words[i] , end = " ")
```
**Ans:**
```python
words=["Class Test","Term Exams","Pre-board Exam","Board Exam"]   # quote fixed
L=len(words)
for i in range(L-1, -1, -1):          # L-1 (last index) and colon added
    print(words[i], end = " ")         # print in small letters
```
4 corrections × ½ mark. Output: Board Exam Pre-board Exam Term Exams Class Test

**Q30 ★ (2 marks, 2026)** The function should return the number of vowels in s. Correct it:
```python
def CountVowels(s):
    for ch in range(s):
        if 'aeiouAEIOU' in ch:
    return(ch)
```
**Ans:**
```python
def CountVowels(s):
    count = 0                      # counter added
    for ch in s:                   # loop over the string, not range(s)
        if ch in 'aeiouAEIOU':     # check ch in the vowel string
            count += 1             # count the vowel
    return count                   # return the count, at function level
```

**Q31 ★ (2 marks, 2025)** The function should return the sum of integers from 1 to N. Correct it:
```python
def Sum(N)
    for I in range(N):
        S=S+I
    return S
print (Sum(10)
```
**Ans:**
```python
def Sum(N):                        # colon added
    S = 0                          # S must start at 0
    for I in range(1, N+1):        # 1 to N (range(N) stops at N-1)
        S = S + I
    return S
print(Sum(10))                     # closing bracket added
```
Output: 55

**Q32 (2 marks, 2024; same type 2023)** The code takes five numbers and prints even or odd. Correct it:
```python
def EvenOdd()
    for i in range(5):
        num=int(input("Enter a number")
        if num/2==0:
            print("Even")
        else:
        print("Odd")
EvenOdd()
```
**Ans:**
```python
def EvenOdd():                                  # colon
    for i in range(5):
        num=int(input("Enter a number"))        # missing bracket
        if num%2==0:                            # % (remainder), not /
            print("Even")
        else:
            print("Odd")                        # indented under else
EvenOdd()
```

### Unit 1C: Functions, scope, random module, exceptions

**Q33 ★ (MCQ, SQP)** Output?
```python
y=8
def update():
    y=y+2
    print(y)
update()
```
a) 10 b) 8 c) Error d) None
**Ans: c) Error.** y is assigned inside the function, so Python treats y as a **local** variable. It is used (y+2) before it has a value, so an error (UnboundLocalError) occurs. Writing `global y` as the first line inside the function would print 10.

**Q34 ★ (MCQ, 2025; same idea 2024)** Output?
```python
def Change(N):
    N=N+10
    print(N,end='$$')
N=15
Change(N)
print(N)
```
**Ans: (A) 25$$15.** The N inside the function is a separate local copy. Changing it does not change the global N.
(2024: `a=20; def convert(a): b=20; a=a+b` then `convert(10); print(a)` prints **20** for the same reason.)

**Q35 (MCQ, 2026)** Output?
```python
def f1(a,b=1):
    print(a+b,end='-')
c=f1(1,2)
print(c,sep='*')
```
**Ans: (C) 3-None.** f1 prints 1+2 = 3. It has no return statement, so it returns **None**, and c = None. sep has no effect when only one value is printed.

**Q36 ★ (2 marks, 2024)** Output:
```python
def callon(b=20,a=10):
    b=b+a
    a=b-a
    print(b,"#",a)
    return b
x=100
y=200
x=callon(x,y)
print(x,"@",y)
y=callon(y)
print(x,"@",y)
```
**Ans:**
```
300 # 100
300 @ 200
210 # 200
300 @ 210
```
First call: b=100, a=200 → b=300, a=100; returns 300 so x=300. Second call: only b=200 is given, a uses its default 10 → b=210, a=200; returns 210 so y=210.

**Q37 (2 marks, 2023)** Output:
```python
a=30
def call(x):
    global a
    if a%2==0:
        x+=a
    else:
        x-=a
    return x
x=20
print(call(35),end="#")
print(call(40),end="@")
```
**Ans:** `65#70@`. a = 30 is even, so x + a each time: 35+30 = 65 and 40+30 = 70.

**Q38 ★ (2 marks, SQP, 2026, 2025, 2024)** Theory: (a) Define global and local variables with an example (SQP). (b) Difference between default and positional parameters, with a function header using both (2026). (c) What does the return statement do? (2025)
**Ans:**
- (a) **Global variable:** made outside all functions; can be used anywhere in the program. **Local variable:** made inside a function; can be used only inside that function.
```python
x = 10          # global
def demo():
    y = 5       # local
    print(x, y)
```
- (b) **Positional parameter:** must get a value in the call, matched by position. **Default parameter:** has a value already in the header, used when no value is passed. Default parameters must come **after** positional ones: `def interest(p, r, t=2):` (so 2024's True/False "positional parameters must be written after default parameters" is **False**).
- (c) return sends a value back to the place where the function was called and ends the function. Example: `def sq(n): return n*n` and then `a = sq(4)` stores 16 in a.

**Q39 ★ (MCQ, SQP)** Possible output?
```python
import random
games = {0: "Chess",1: "Scrabble",2: "Sudoku",3: "Tic-Tac-Toe",4: "Puzzle"}
start_key = random.randint(1, 2)
end_key = random.randrange(3, 4)
for k in range(start_key, end_key + 1):
    print(games[k], end="@@")
```
a) Sudoku@@Tic-Tac-Toe@@Puzzle@@ b) Scrabble@@Sudoku@@Tic-Tac-Toe@@ c) Chess@@Scrabble@@Tic-Tac-Toe@@ d) Scrabble@@Tic-Tac-Toe@@
**Ans: b) Scrabble@@Sudoku@@Tic-Tac-Toe@@.** randint(1,2) gives 1 or 2 (both ends included). randrange(3,4) gives only 3 (the end is not included). So the loop runs from 1 or 2 up to 3: keys 1,2,3 or 2,3.
**Rule:** randint(a, b) → a to b, **both included**. randrange(a, b) → a to b-1. randrange(b) → 0 to b-1.

**Q40 ★ (2 marks, 2026)** Which output(s) will NOT be displayed, and how many times does the loop run?
```python
import random
a = [1,2,3,4,5,6]
for i in range(4):
    j = random.randrange(i,5)
    print(a[j],end='-')
```
(A) 3-4-5-4- (B) 2-2-4-5- (C) 4-3-3-5- (D) 5-1-2-4-
**Ans:** The loop runs **4 times**. Possible values: 1st print a[0..4] = 1 to 5; 2nd a[1..4] = 2 to 5; 3rd a[2..4] = 3 to 5; 4th a[3..4] = 4 or 5. **(D) 5-1-2-4- will NOT be displayed** (the 2nd value cannot be 1, and the 3rd cannot be 2).
(2025 version: `Cards=["Heart","Spade","Club","Diamond"]`, `for i in range(2): print(Cards[random.randint(1,i+2)],end="#")`. 1st print: index 1-2 (Spade/Club); 2nd: index 1-3 (Spade/Club/Diamond). **Ans: (A) Spade#Diamond#.**)
(2024 version: `for K in range(2,0,-1): R = random.randrange(K)` with Signal = ['RED','YELLOW','GREEN']. 1st: index 0-1, 2nd: index 0 only. **Ans: (a) YELLOW#RED#.**)

**Q41 ★ (MCQ, 2025)** Output?
```python
N='5'
try:
    print('WORD' + N, end='#')
except:
    print('ERROR',end='#')
finally:
    print('OVER')
```
**Ans: (B) WORD5#OVER.** N is a string, so 'WORD' + '5' works and no error occurs. The finally block **always** runs.

**Q42 (1 mark, SQP)** What is written in errorlog.txt?
```python
def data(num):
    try:
        return 190/(29-num)
    except ZeroDivisionError:
        logfile = open("errorlog.txt", "w")
        logfile.write("Num was 29")
        logfile.close()
data(29)
```
**Ans:** `Num was 29`. 29-29 = 0, so division by zero raises ZeroDivisionError and the except block writes to the file.

**Q43 (True/False, 2026, 2024)** (a) "Logical errors can be handled using try...except...finally." (2026) (b) "The name of the exception must be written with the except clause." (2024)
**Ans: (a) False.** try-except handles run-time errors (exceptions) only; a logical error gives a wrong answer without any error message. **(b) False.** A plain `except:` catches every exception.

**Q44 ★ (2 marks, SQP)** Write a function sum_positive(list1) that prints the sum of all positive numbers in the list. Example: [10, -5, 20, -3, 7] → 37.
**Ans:**
```python
def sum_positive(list1):
    total = 0
    for num in list1:
        if num > 0:
            total += num
    print(total)
```
(OR part, SQP: capitalize_words(words) → loop, `result.append(w.capitalize())`, return result.)

**Q45 (3 marks, 2023)** Write EOReplace(L): add 1 to every even number and subtract 1 from every odd number. [10,20,30,40,35,55] → [11,21,31,41,34,54].
**Ans:**
```python
def EOReplace(L):
    for i in range(len(L)):
        if L[i] % 2 == 0:
            L[i] = L[i] + 1
        else:
            L[i] = L[i] - 1
    print(L)
```

**Q46 (3 marks, SQP)** pairs = ((2,5),(4,2),(9,8),(12,10)). Write cnt_even() to count pairs (a, b) where both are even.
**Ans:**
```python
def cnt_even(t):
    c = 0
    for a, b in t:
        if a % 2 == 0 and b % 2 == 0:
            c += 1
    return c
print(cnt_even(pairs))      # prints 2
```

### Unit 1D: File handling (text, binary, CSV)

**Q47 ★ (1 mark each, 2023, 2024, 2026, SQP)** File basics:
(a) Which mode keeps the file pointer at the **end** of the file? (r+, x, w, a) (2023)
(b) Default reference point of seek(offset[, ref]) is? (0, 1, 2, 3) (2023)
(c) F = open('CONTENT.TXT'). Which is invalid: F.seek(1,0), F.seek(0,1), F.seek(0,-1), F.seek(0,2)? (2024)
(d) Correct mode to open "pqr.dat" in read-only mode: a, rb, r+, rb+? (2026)
**Ans:** (a) **a** (append) (b) **0** (start of file) (c) **F.seek(0,-1)**: the reference point can only be 0, 1 or 2 (start, current, end) (d) **rb** (binary, read only; r+ and rb+ also allow writing).

**Q48 ★ (2 marks, SQP, 2024)** (a) Difference between seek() and tell() with an example. (b) Difference between 'w' and 'a' modes. (c) Advantage of the with clause.
**Ans:**
- (a) **tell()** returns the current position of the file pointer (in bytes). **seek(n)** moves the pointer to position n.
```python
f = open("file.txt", "r")
print(f.tell())    # 0
f.seek(5)          # pointer moves to byte 5
```
- (b) **'w'** creates a new file, or **erases** an existing file and writes from the start. **'a'** adds new data at the **end** without erasing old data (and creates the file if it does not exist).
- (c) `with open("a.txt") as f:` closes the file **automatically** when the block ends, even if an error occurs. Syntax: `with open(filename, mode) as fileobject:`

**Q49 ★ (3 marks, 2025)** Write a function to display all lines containing the word 'vote' from "Elections.txt".
File: "In an election many people vote to choose their representative. / The candidate getting the maximum share of votes stands elected. / Normally, one person has to vote once. / The process of voting may vary with time and region."
**Ans:**
```python
def show_vote():
    f = open("Elections.txt", "r")
    for line in f:
        words = line.split()
        if "vote" in words:
            print(line, end="")
    f.close()
show_vote()
```
Output: line 1 and line 3. ("votes" and "voting" are different words, so lines 2 and 4 are not shown.) Marks: ½ header, ½ open, 1½ logic, ½ close/call.

**Q50 ★ (3 marks, 2026)** Write a function that counts and returns the number of digits in "Space.txt". (The sample text has 1969, 400 and 2030, so it should return 11.)
**Ans:**
```python
def count_digits():
    f = open("Space.txt", "r")
    data = f.read()
    f.close()
    count = 0
    for ch in data:
        if ch.isdigit():
            count += 1
    return count
print(count_digits())
```
(OR part, 2026: show words in which 'e' appears at least twice: loop over `f.read().split()` and print w if `w.count('e') >= 2`.)

**Q51 (3 marks, 2024)** Write c_words() to count and display the number of uppercase and lowercase letters in "Words.txt".
**Ans:**
```python
def c_words():
    f = open("Words.txt", "r")
    data = f.read()
    f.close()
    up = lo = 0
    for ch in data:
        if ch.isupper():
            up += 1
        elif ch.islower():
            lo += 1
    print("Uppercase:", up)
    print("Lowercase:", lo)
```

**Q52 (3 marks, 2023; similar 2025, SQP)** Write count_Dwords() to count words ending with a digit in "Details.txt". (File: "On seat2 VIP1 will sit and / On seat1 VVIP2 will be sitting" → 4)
**Ans:**
```python
def count_Dwords():
    f = open("Details.txt", "r")
    count = 0
    for w in f.read().split():
        if w[-1].isdigit():
            count += 1
    f.close()
    print("Number of words ending with a digit are", count)
```
**Same template, other years:** words starting and ending with a vowel (2025): `if w[0] in "aeiouAEIOU" and w[-1] in "aeiouAEIOU"`. Count the word "Python" (SQP): `if w.lower() == "python"`. Lines with at least 10 words (2023): `for line in f: if len(line.split()) >= 10: print(line)`.

**Q53 ★ (A-R, SQP; same idea 2025)** A: Opening a file in mode rb allows you to read a binary file without modifying it. R: In rb mode, if the file does not exist, Python creates a new empty file.
**Ans: c) A is true but R is false.** In rb (and r) mode a missing file gives FileNotFoundError; only w and a modes create a new file.
(2025: A: For a binary file opened in 'rb' mode, pickle.dump() will give an error. R: pickle.dump() is used to read from a binary file. **Ans: (C)** A true, R false: dump() **writes**; load() **reads**.)

**Q54 ★ (5 marks, SQP; same type 2026, 2025, 2023)** Records are [Roll_No, Student_Name, Course, Fees]. Write functions to (I) input details and append them to a binary file, (II) update the Fees of all students in the "Data Science" course to 75000.
**Ans:**
```python
import pickle
def AddEnrollment():
    Roll = int(input("Enter Roll No: "))
    Name = input("Enter Student Name: ")
    Course = input("Enter Course: ")
    Fees = int(input("Enter Fees: "))
    rec = [Roll, Name, Course, Fees]
    f = open("Enrollments.dat", "ab")      # ab = append binary
    pickle.dump(rec, f)
    f.close()

def UpdateFees():
    records = []
    f = open("Enrollments.dat", "rb")
    try:
        while True:
            rec = pickle.load(f)
            if rec[2] == "Data Science":
                rec[3] = 75000
            records.append(rec)
    except EOFError:                       # end of file reached
        f.close()
    f = open("Enrollments.dat", "wb")      # write back all records
    for rec in records:
        pickle.dump(rec, f)
    f.close()
```
**Steps to remember for update:** read all records with load() in a `while True` loop inside try, change the matching ones, catch EOFError, then write all records back in "wb" mode. (2026: increase Charges by 500 → `rec[3] = rec[3] + 500`. 2025: increase FARE by 5% → `rec[4] = rec[4] * 1.05`.)

**Q55 (3 marks, 2024)** EMP.DAT has records [Emp_Id, Name, Salary]. Write disp_Detail() to show employees with salary below 25000.
**Ans:**
```python
import pickle
def disp_Detail():
    f = open("EMP.DAT", "rb")
    try:
        while True:
            rec = pickle.load(f)
            if rec[2] < 25000:
                print(rec)
    except EOFError:
        f.close()
```

**Q56 ★ (4 marks, SQP; same type 2024)** Rentals.csv has Vehicle_ID, Vehicle_Type, Hours_Rented, Rate_Per_Hour. Write (I) AddRental() to accept details and append them, (II) CalculateTotalRent() to calculate and return total rent (Hours × Rate).
**Ans:**
```python
import csv
def AddRental():
    vid = input("Enter Vehicle ID: ")
    vtype = input("Enter Vehicle Type: ")
    hours = input("Enter Hours Rented: ")
    rate = input("Enter Rate Per Hour: ")
    f = open("Rentals.csv", "a", newline="")
    w = csv.writer(f)
    w.writerow([vid, vtype, hours, rate])
    f.close()

def CalculateTotalRent():
    total = 0
    f = open("Rentals.csv", "r")
    r = csv.reader(f)
    for row in r:
        total += int(row[2]) * int(row[3])    # csv gives strings, so use int()
    f.close()
    return total
```
Marks: ½ each for input, append mode, writer(), writerow(), read mode, reader(), int() calculation, display/return.
(2024: Add_Device() is the same as AddRental; Count_Device() counts rows where `int(row[2]) < 1000`.)

**Q57 (4 marks, 2025; similar 2026)** "P_record.csv" has [Name, Disease, Days, Amount]. Write read_data() to display details of all 'Cancer' patients and count_rec() to count and return the number of records.
**Ans:**
```python
import csv
def read_data():
    f = open("P_record.csv", "r")
    for row in csv.reader(f):
        if row[1] == "Cancer":
            print(row)
    f.close()

def count_rec():
    f = open("P_record.csv", "r")
    count = 0
    for row in csv.reader(f):
        count += 1
    f.close()
    return count
```
(2026: copy records with population > 10000000 from States.csv to More.csv, skipping the header: call `next(r)` once to skip the header row, then `if int(row[2]) > 10000000: w.writerow(row)`.)

### Unit 1E: Stack (3 marks, asked every year)

**Q58 ★ (3 marks, SQP)** B = [("Machine Learning Basics", 550), ("World Geography", 450), ("Wonder World", 140), ("AI Revolution", 750)]. Write Push_element() to push books with price more than 250 onto stack Books, and Pop_element() to pop and display them, then print "Stack Empty".
**Ans:**
```python
Books = []
def Push_element():
    for item in B:
        if item[1] > 250:
            Books.append(item)

def Pop_element():
    while Books != []:
        print(Books.pop())
    print("Stack Empty")
```
Output:
```
('AI Revolution', 750)
('World Geography', 450)
('Machine Learning Basics', 550)
Stack Empty
```

**Q59 ★ (3 marks, 2024)** Nums = [213,10025,167,254923,14,1297653,31498,386,92765]. PushBig(): push numbers with 5 or more digits onto BigNums. PopBig(): pop and display them, then "Stack Empty".
**Ans:**
```python
BigNums = []
def PushBig():
    for n in Nums:
        if len(str(n)) >= 5:
            BigNums.append(n)

def PopBig():
    while len(BigNums) > 0:
        print(BigNums.pop())
    print("Stack Empty")
```
Stack after PushBig: [10025, 254923, 1297653, 31498, 92765]. Output: 92765, 31498, 1297653, 254923, 10025 (one per line), then Stack Empty.

**Q60 (3 marks, 2023)** Records are [Customer name, Room Type]. Push_Cust(): push names of customers in 'Delux' rooms onto stack Hotel. Pop_Cust(): pop and display names, then "Underflow".
**Ans:**
```python
Hotel = []
def Push_Cust(customers):
    for c in customers:
        if c[1] == "Delux":
            Hotel.append(c[0])

def Pop_Cust():
    while Hotel:
        print(Hotel.pop())
    print("Underflow")
```
For Siddharth (Delux), Rahul (Standard), Jerry (Delux) the output is Jerry, Siddharth, Underflow.

**Q61 ★ (3 marks, 2025; same type 2026)** ClrStack holds tuples like ('Yellow', 237, 250, 68). Write push_Clr(ClrStack, new_Clr), pop_Clr(ClrStack) (return the top record, or print "Underflow" if empty), isEmpty(ClrStack) (return True if empty, else False).
**Ans:**
```python
def push_Clr(ClrStack, new_Clr):
    ClrStack.append(new_Clr)

def pop_Clr(ClrStack):
    if len(ClrStack) == 0:
        print("Underflow")
    else:
        return ClrStack.pop()

def isEmpty(ClrStack):
    if len(ClrStack) == 0:
        return True
    else:
        return False
```
(2026: push a fruit record only if `Fruit['Price'] < 100`; display from the top with `for i in range(len(S)-1, -1, -1): print(S[i])`, else "EMPTY STACK".)

### Unit 2: Computer Networks

**Q62 ★ (MCQ, several years)** One-mark device questions:
(a) Which device regenerates a weak signal and sends it ahead? (Hub, Ethernet card, Repeater, Modem) (2025)
(b) Which device is the entry and exit point of a network; all data coming in or going out passes through it? (Modem, Gateway, Switch, Repeater) (2026)
(c) Every NIC has its own ______ address. (IP, OSI, Physical (MAC), DHCP) (SQP)
(d) Expanded form of RJ45? (2026)
**Ans:** (a) **Repeater** (b) **Gateway** (c) **Physical (MAC)** (d) **Registered Jack 45**

**Q63 ★ (MCQ, several years)** One-mark protocol questions:
(a) Protocol for phone calls over the internet? (PPP, FTP, HTTP, VoIP) (2025; 2019 similar)
(b) Protocol to send and receive emails? (PPP, HTTP, FTP, SMTP) (2024)
(c) ______ is a set of rules followed by communicating parties for successful, reliable data communication. (2024)
**Ans:** (a) **VoIP** (b) **SMTP** (c) **Protocol**

**Q64 (MCQ, SQP, 2023)** (a) Long-distance communication without line-of-sight is mainly done using: Microwaves, Ultraviolet, Radio waves, X-rays (SQP) (b) ______ is used for point-to-point (unicast) communication such as radar and satellite: Infrared, Bluetooth, Microwaves, Radio waves (2023)
**Ans:** (a) **Radio waves** (b) **Microwaves**

**Q65 (MCQ, SQP, 2024)** (a) In ______ switching, a dedicated path between sender and receiver is set up before communication starts. (b) Unit of network bandwidth: KB, Bit, Hz, Km (2024)
**Ans:** (a) **Circuit** switching (b) **Hz** (Hertz). (Data transfer rate is measured in bps.)

**Q66 ★ (1-2 marks, 2026, 2025, 2024, 2023)** Expand: XML, ARPANET, PPP, HTML, TCP, URL.
**Ans:** XML = eXtensible Markup Language; ARPANET = Advanced Research Projects Agency Network; PPP = Point-to-Point Protocol; HTML = HyperText Markup Language; TCP = Transmission Control Protocol; URL = Uniform Resource Locator.
(2025: "Explain URL": the complete address of a web page or file on the internet, for example https://www.cbse.gov.in/index.html. "Use of PPP": it is used for a direct connection between two computers/devices, for example a home computer and the ISP's server over a telephone line.)

**Q67 ★ (2 marks, SQP)** Which protocol helps us browse web pages using internet browsers? Name one browser.
**Ans:** **HTTP** (HyperText Transfer Protocol) (or HTTPS, the secure version). Browser: Google Chrome / Mozilla Firefox / Microsoft Edge / Safari.
(2026: "What is a protocol? Which protocol transmits hypertext across the web?" → A protocol is a set of rules for communication between devices on a network; HTTP.)

**Q68 ★ (2 marks, 2026, SQP)** (a) One advantage and one disadvantage of bus topology. (b) Define tree topology and give one limitation.
**Ans:**
- (a) **Bus advantage:** needs the least cable, so it is cheap and easy to set up. **Disadvantage:** if the main cable (backbone) fails, the whole network stops; finding a fault is hard.
- (b) **Tree topology:** groups of star networks connected to a main bus (backbone) cable, in a hierarchy. **Limitation:** if the backbone fails, the whole network fails; it needs a lot of cable and devices, so it is costly.

**Q69 (2 marks, 2024, 2023)** (a) One difference between circuit and packet switching. (b) Define web hosting and name two web browsers. (c) Difference between URL and domain name.
**Ans:**
- (a) **Circuit switching:** a fixed path is reserved for the whole communication (like a phone call). **Packet switching:** data is broken into packets that may travel by different routes and are joined at the destination; no path is reserved.
- (b) **Web hosting:** a service that stores a website's files on a web server connected to the internet, so anyone can open the website. Browsers: Chrome, Firefox.
- (c) A **domain name** is the name of a website (cbse.gov.in). A **URL** is the full address of a page, which includes the protocol, domain name and file path (https://www.cbse.gov.in/index.html).

**Q70 ★ (5 marks, SQP case study)** AKA University, Raipur, has Law Block (30 computers), Technology Block (55), HR Center (120), Business Block (45). Distances: Law-Business 90 m, Law-Technology 55 m, Law-HR 120 m, Business-Technology 70 m, Business-HR 105 m, Technology-HR 45 m.
(I) Best place for the server? (II) Topology for centralised network management (draw it). (III) Where to place a repeater and a switch? (IV) Connect a study center in Delhi with reasonably high-speed guided medium. (V) Protocol for a face-to-face digital meeting with all heads at once / use of VoIP.
**Ans:**
- (I) **HR Center**, because it has the **maximum number of computers** (120), so most traffic stays inside it (80-20 rule).
- (II) **Star topology**: HR Center in the middle with a separate cable from HR Center to each of Law, Technology and Business blocks. (Draw 4 boxes, HR in the centre, 3 lines out of it.)
- (III) **Repeater** between HR Center and Law Block (120 m) and between HR Center and Business Block (105 m), because these distances are **more than 100 m**. **Switch** in **every block**, to connect the computers inside that block.
- (IV) **Optical fibre** cable.
- (V) **VoIP** (Voice over Internet Protocol). VoIP lets us make voice and video calls over the internet instead of a normal telephone line.

**Q71 ★ (5 marks, 2026 case study)** Amritsar campus: ADMIN 25 computers, ACADEMIC 600, HOSTEL 120, SPORTS 50. Distances: ADMIN-ACADEMIC 60 m, ADMIN-HOSTEL 160 m, ADMIN-SPORTS 80 m, ACADEMIC-HOSTEL 40 m, ACADEMIC-SPORTS 120 m, HOSTEL-SPORTS 150 m. (i) Server location (ii) Cable layout (iii) Two wired media (iv) FM-type broadcast in the campus: radio waves, microwaves or infrared?
**Ans:**
- (i) **ACADEMIC block**: it has the most computers (600).
- (ii) **Star layout from ACADEMIC:** ACADEMIC-ADMIN (60 m), ACADEMIC-HOSTEL (40 m), ACADEMIC-SPORTS (120 m; put a repeater on this cable because it is over 100 m).
- (iii) Twisted pair (Ethernet) cable and optical fibre cable (co-axial cable is also wired).
- (iv) **Radio waves** (FM radio uses radio waves).

**Q72 (1 mark each, 2025, 2023, 2024 case studies)** Common extra parts:
(a) Device to connect all computers within each block? (b) Where should the router be placed? (c) Manager in another city wants to remotely use a computer in the Admin block: which protocol? (d) Protocol to transfer files between two branches? (e) Delhi office connected to Kanpur 300 km away: LAN, MAN or WAN? (f) Fast wired medium to connect offices in two different cities? (g) Device to refresh the signal and reduce data loss between distant locations?
**Ans:** (a) **Switch** (b) In the **server block** (router/gateway connects the LAN to the internet) (c) **TELNET** (d) **FTP** (File Transfer Protocol) (e) **WAN**, because the distance is more than a city (f) **Optical fibre** (g) **Repeater**

### Unit 3: Database concepts and SQL

**Q73 ★ (MCQ, SQP, 2026)** (a) A column in one table that matches the primary key of another table is a: composite / candidate / foreign / super key (SQP). (b) A table has two candidate keys and one is chosen as primary key. How many alternate keys? 0/1/2/3 (2026). (c) "Class" can only take values from {IX, X, XI, XII}. This set is the: domain / tuple / attribute / key (SQP).
**Ans:** (a) **Foreign key** (b) **1** (alternate keys = candidate keys - primary key = 2 - 1) (c) **Domain**

**Q74 ★ (MCQ, 2026, SQP, 2023, 2025)** (a) A relation has 2 tuples and 3 attributes. 2 attributes are deleted and 4 tuples are added. Cardinality = ? (2026) (b) Which will NOT change when a new record is inserted: cardinality, degree, number of tuples, total rows? (SQP) (c) ______ is the number of tuples in a relation. (2023) (d) True/False: table A has 6 rows, 3 columns and B has 5 rows, 2 columns; their Cartesian product has 30 rows and 5 columns. (2025)
**Ans:** (a) **6** (2 + 4 rows; deleting columns does not change rows) (b) **Degree** (c) **Cardinality** (d) **True** (rows multiply: 6 × 5 = 30; columns add: 3 + 2 = 5)
**Remember:** Degree = number of columns (attributes). Cardinality = number of rows (tuples).

**Q75 ★ (MCQ, 2025, 2024, 2026)** (a) Which is a DML command: UPDATE, CREATE, ALTER, DROP? (2025) (b) Which is NOT a DDL command: DROP, CREATE, UPDATE, ALTER? (2024) (c) Which command can change the degree of a table: DROP TABLE, ALTER TABLE, UPDATE...SET, DELETE? (2026) (d) Which removes the attribute Age from Student? (SQP)
**Ans:** (a) **UPDATE** (b) **UPDATE** (c) **ALTER TABLE** (d) **ALTER TABLE Student DROP COLUMN Age;**
DDL (structure): CREATE, ALTER, DROP. DML (data): INSERT, UPDATE, DELETE, SELECT.

**Q76 ★ (MCQ, 2025, 2026, 2024, SQP)** (a) Constraint that does not allow duplicate values: UNIQUE / DISTINCT / NOT NULL / HAVING (2025). (b) Aggregate function that counts values in a column ignoring NULLs (2025). (c) Aggregate function that returns the smallest value (2026). (d) Aggregate function that displays the cardinality of a table (2024). (e) SELECT combined with ______ returns records without repetition (2024). (f) Query for salaries between 90000 and 100000 including both limits (SQP).
**Ans:** (a) **UNIQUE** (b) **COUNT()** (c) **MIN()** (d) **COUNT(*)** (e) **DISTINCT** (f) `SELECT * FROM Employees WHERE salary BETWEEN 90000 AND 100000;`

**Q77 (A-R, SQP; same idea 2026)** A: `SELECT Student_Name FROM Student WHERE Guardian_Phone IS NULL;` shows names of students whose guardian phone number is not recorded. R: In MySQL you can also use = to check NULL values; it is the same as IS NULL.
**Ans: c) A is true but R is false.** NULL can only be checked with IS NULL / IS NOT NULL. `= NULL` never matches.
(2026: A: PRIMARY KEY makes each value unique and not NULL. R: Candidate keys are not eligible to become a primary key. **Ans: (C)** A true, R false: the primary key is chosen **from** the candidate keys.)

**Q78 ★ (2 marks, SQP, 2024, 2023)** Write commands to: (a) display all tables in the current database (b) delete database CS_SP (c) show the structure of table Term1 (d) view all databases.
**Ans:** (a) `SHOW TABLES;` (b) `DROP DATABASE CS_SP;` (c) `DESCRIBE Term1;` (or `DESC Term1;`) (d) `SHOW DATABASES;`

**Q79 ★ (2 marks, SQP; same idea 2023)** Difference between ALTER and UPDATE, with examples. (2023: two DDL and two DML commands; CHAR vs VARCHAR.)
**Ans:**
| ALTER | UPDATE |
|---|---|
| DDL command; changes the **structure** of a table (adds, removes or changes columns/constraints) | DML command; changes the **data** (values in rows) |
| `ALTER TABLE Employee ADD age INT;` | `UPDATE Employee SET salary = 50000 WHERE emp_id = 10;` |
**CHAR(n)** is fixed length: CHAR(10) always uses 10 characters of space. **VARCHAR(n)** is variable length: it uses only as much space as the actual value (up to n).

**Q80 ★ (2 marks, 2026)** Table W_STOCK: W_Code CHAR(5), W_Description VARCHAR(20), B_Qty INTEGER, U_Price FLOAT. (i)(a) Create the table with W_Code as primary key. (b) Can U_Price be the primary key? (ii)(a) Add attribute E_Date (DATE). (b) Remove column B_Qty.
**Ans:**
- (i)(a)
```sql
CREATE TABLE W_STOCK (
  W_Code CHAR(5) PRIMARY KEY,
  W_Description VARCHAR(20),
  B_Qty INT,
  U_Price FLOAT
);
```
- (i)(b) **No.** Two items can have the same price, and a primary key must be unique for every row.
- (ii)(a) `ALTER TABLE W_STOCK ADD E_Date DATE;` (b) `ALTER TABLE W_STOCK DROP COLUMN B_Qty;`

**Q81 (2 marks, 2025; same type 2024)** Table EMPLOYEES (EMPNO, NAME, DEPARTMENT, BASICSAL); two employees can have the same name. (i)(a) Which attribute should be the primary key? (b) Constraint so that NAME cannot be NULL but can repeat. (ii)(a) Change BASICSAL to store up to 99999.99. (b) Delete the table.
**Ans:** (i)(a) **EMPNO**, because it is unique for each employee (names can repeat). (b) **NOT NULL**. (ii)(a) `ALTER TABLE EMPLOYEES MODIFY BASICSAL FLOAT(7,2);` (7 digits in total, 2 after the decimal point; DECIMAL(7,2) is also accepted) (b) `DROP TABLE EMPLOYEES;`
(2024: add column Category: `ALTER TABLE Sports ADD Category VARCHAR(20);` then `INSERT INTO Sports VALUES ('G42', 'Above 18', 'Chess', 'Senior');`. Add primary key: `ALTER TABLE Projects ADD PRIMARY KEY (P_id);`)

**Practice table for Q82-Q84** (written for practice in the board style; the board papers give a similar table in Q32):

Table: EMPLOYEE

| EID | NAME | DEPT | SALARY | CITY |
|---|---|---|---|---|
| E1 | Aman | Sales | 45000 | Delhi |
| E2 | Neha | HR | 52000 | Mumbai |
| E3 | Rohan | Sales | 38000 | Delhi |
| E4 | Sanjana | IT | 75000 | Pune |
| E5 | Kabir | IT | 68000 | NULL |
| E6 | Divya | Sales | 40000 | Mumbai |

**Q82 ★ (4 marks, practice; same tasks as SQP Q32, 2026 Q32, 2025 Q32)** Write queries to:
(i) display the number of employees in each department where the number is more than 1 (SQP type)
(ii) display the different (distinct) cities (SQP, 2026 type)
(iii) display details of employees whose names contain 'an' (SQP type)
(iv) display all records in descending order of name (SQP type)
(v) display names and salaries of employees with salary between 40000 and 52000 (2025 type)
(vi) display the record of employees whose city is not known (2025, 2024 type)
(vii) increase the salary of HR employees by 5000 (2026, 2025 type)
(viii) display each department and its maximum salary (2026 type)
**Ans:**
- (i) `SELECT DEPT, COUNT(*) FROM EMPLOYEE GROUP BY DEPT HAVING COUNT(*) > 1;`
- (ii) `SELECT DISTINCT CITY FROM EMPLOYEE;`
- (iii) `SELECT * FROM EMPLOYEE WHERE NAME LIKE '%an%';`
- (iv) `SELECT * FROM EMPLOYEE ORDER BY NAME DESC;`
- (v) `SELECT NAME, SALARY FROM EMPLOYEE WHERE SALARY BETWEEN 40000 AND 52000;`
- (vi) `SELECT * FROM EMPLOYEE WHERE CITY IS NULL;`
- (vii) `UPDATE EMPLOYEE SET SALARY = SALARY + 5000 WHERE DEPT = 'HR';`
- (viii) `SELECT DEPT, MAX(SALARY) FROM EMPLOYEE GROUP BY DEPT;`

**Q83 ★ (4 marks, practice; same type as SQP Q32 OR, 2026 Q32(b), 2025 Q32(b))** Write the output:
(i) `SELECT DEPT, COUNT(*) FROM EMPLOYEE GROUP BY DEPT;`
(ii) `SELECT NAME FROM EMPLOYEE WHERE NAME LIKE '%an%';`
(iii) `SELECT COUNT(*), COUNT(CITY) FROM EMPLOYEE;`
(iv) `SELECT DEPT, MAX(SALARY) FROM EMPLOYEE GROUP BY DEPT HAVING COUNT(*) > 1;`
**Ans:**
- (i)

| DEPT | COUNT(*) |
|---|---|
| HR | 1 |
| IT | 2 |
| Sales | 3 |

- (ii) Aman, Rohan, Sanjana (one per row, under the heading NAME)
- (iii) COUNT(*) = **6**, COUNT(CITY) = **5** (COUNT(column) does not count the NULL)
- (iv)

| DEPT | MAX(SALARY) |
|---|---|
| IT | 75000 |
| Sales | 45000 |

(HR has only 1 employee, so HAVING removes it.)

**Q84 (4 marks, practice)** Output:
(i) `SELECT NAME, SALARY FROM EMPLOYEE ORDER BY SALARY DESC;` (first two rows only)
(ii) `SELECT AVG(SALARY) FROM EMPLOYEE WHERE DEPT = 'IT';`
(iii) `SELECT MIN(SALARY), MAX(SALARY) FROM EMPLOYEE;`
(iv) `SELECT COUNT(DISTINCT DEPT) FROM EMPLOYEE;`
**Ans:** (i) Sanjana 75000, Kabir 68000 (ii) 71500 (MySQL shows 71500.0000) (iii) 38000, 75000 (iv) 3

**Q85 ★ (4 marks, SQP)** Tables Chess_Event (Event_ID, Event_Name, Event_Date, Venue, ...) and Registrations (..., Student_Name, Event_ID, ...). Write queries to:
(I) update the venue of "Inter-School Chess Championship" to "Multi-Purpose Hall"
(II) display all chess events after 2025-01-01
(III) display registration details of students registered for events in 'Auditorium Hall', 'Activity Room 3' or 'Library Conference Area'
(IV)(a) display student_name with event_name for all registrations OR (b) display the Cartesian product of the two tables.
**Ans:**
- (I) `UPDATE Chess_Event SET Venue = 'Multi-Purpose Hall' WHERE Event_Name = 'Inter-School Chess Championship';`
- (II) `SELECT * FROM Chess_Event WHERE Event_Date > '2025-01-01';`
- (III) `SELECT R.* FROM Registrations R, Chess_Event C WHERE R.Event_ID = C.Event_ID AND C.Venue IN ('Auditorium Hall', 'Activity Room 3', 'Library Conference Area');`
- (IV)(a) `SELECT R.Student_Name, C.Event_Name FROM Registrations R, Chess_Event C WHERE R.Event_ID = C.Event_ID;`
- (IV)(b) `SELECT * FROM Chess_Event, Registrations;`
**Rule for joins:** write both table names after FROM and join them on the **common column** in WHERE: `WHERE A.col = B.col`.

**Q86 ★ (4 marks, 2026)** Tables CUSTOMERS (C_ID, C_Name, ...) and LOANS (C_ID, L_Amt, RoI, L_Date, Terms, ...). Write queries for: (i) number of records in LOANS where RoI is above 7.0 (ii) names of customers whose loan amount is above 1000000 (iii) C_ID, C_Name and Terms of records where L_Date is after 31 December 2024 (iv)(a) details of all loans in descending order of RoI OR (b) C_ID and average term for each C_ID.
**Ans:**
- (i) `SELECT COUNT(*) FROM LOANS WHERE RoI > 7.0;`
- (ii) `SELECT C_Name FROM CUSTOMERS C, LOANS L WHERE C.C_ID = L.C_ID AND L_Amt > 1000000;`
- (iii) `SELECT C.C_ID, C_Name, Terms FROM CUSTOMERS C, LOANS L WHERE C.C_ID = L.C_ID AND L_Date > '2024-12-31';`
- (iv)(a) `SELECT * FROM LOANS ORDER BY RoI DESC;` (b) `SELECT C_ID, AVG(Terms) FROM LOANS GROUP BY C_ID;`
(Column names in (ii)-(iii) are as given in the question; the tables are joined on C_ID.)

**Q87 (4 marks, 2025)** Tables Articles (Code, A_Code, Article, DOC, Price) and Artists (A_Code, Name, Phone, Email, DOB). Write queries to: (i) show all Articles in descending order of price (ii) show Articles created in 2020 (iii) show the structure of Artists (iv) names of artists whose Article is 'Painting' using (a) equi-join (b) natural join.
**Ans:**
- (i) `SELECT * FROM Articles ORDER BY Price DESC;`
- (ii) `SELECT * FROM Articles WHERE DOC BETWEEN '2020-01-01' AND '2020-12-31';`
- (iii) `DESCRIBE Artists;`
- (iv)(a) `SELECT Name FROM Artists, Articles WHERE Artists.A_Code = Articles.A_Code AND Article = 'Painting';`
- (iv)(b) `SELECT Name FROM Artists NATURAL JOIN Articles WHERE Article = 'Painting';`
**Equi-join** shows the common column twice; **natural join** shows it only once.

### Unit 3B: Python-MySQL connectivity (4 marks, asked every year since 2023)

**Q88 ★ (4 marks, SQP; same type 2024)** Database LibraryDB, table book_records (Book_ID, Book_Title, Author, Copies). User librarian, password lib@2025, host localhost. Change Book_Title to 'Data Structures in Python' for Book_ID 109.
**Ans:**
```python
import mysql.connector
con = mysql.connector.connect(host="localhost", user="librarian",
                              password="lib@2025", database="LibraryDB")
cur = con.cursor()
q = "UPDATE book_records SET Book_Title='Data Structures in Python' WHERE Book_ID=109"
cur.execute(q)
con.commit()                 # needed to save INSERT / UPDATE / DELETE
print("Book title updated successfully.")
con.close()
```
Marks: ½ import, ½ connect(), ½ cursor(), 1 query, 1 execute + commit, ½ close.

**Q89 ★ (4 marks, 2026; same type 2024 OR)** Table Account (Stud_id, Sname, Class, Fees) in database SCHOOL. User admin, password root, host localhost. Display records of students whose fees is less than 5000.
**Ans:**
```python
import mysql.connector
con = mysql.connector.connect(host="localhost", user="admin",
                              password="root", database="SCHOOL")
cur = con.cursor()
cur.execute("SELECT * FROM Account WHERE Fees < 5000")
data = cur.fetchall()        # list of tuples
for row in data:
    print(row)
con.close()
```
For SELECT there is no commit(). (2023 MCQ: fetchall() returns a **list of tuples**.)

**Q90 (4 marks, 2025)** Table THEATRE (Th_ID, Name, City, Location, Seats) in database CINEMA. Host localhost, user root, password Ex2025. Write Delete_Theatre() to input Th_ID and permanently delete that record.
**Ans:**
```python
import mysql.connector
def Delete_Theatre():
    con = mysql.connector.connect(host="localhost", user="root",
                                  password="Ex2025", database="CINEMA")
    cur = con.cursor()
    tid = input("Enter Theatre ID: ")
    q = "DELETE FROM THEATRE WHERE Th_ID = '{}'".format(tid)
    cur.execute(q)
    con.commit()
    print(cur.rowcount, "record(s) deleted")
    con.close()
```
(The query can also use %s: `cur.execute("DELETE FROM THEATRE WHERE Th_ID = %s", (tid,))`.)

**Q91 (3 marks, 2023)** Complete the code that deletes the record with E_code 'E101' from table employee (database emp, user root, password root):
```python
import ________ as mysql        # Statement 1
def delete():
    mydb=mysql.connect(host="localhost",user="root",passwd="root",database="emp")
    mycursor=mydb.cursor()
    ________                    # Statement 2
    ________                    # Statement 3
    print("Record deleted")
```
**Ans:** Statement 1: `import mysql.connector as mysql` Statement 2: `mycursor.execute("DELETE FROM employee WHERE E_code='E101'")` Statement 3: `mydb.commit()`
(OR part: to fetch employees from Delhi: `mycursor.execute("SELECT * FROM employee WHERE City='Delhi'")` and `details = mycursor.fetchall()`.)

---

## 6. Quick revision sheet

### 6a. Python one-liners to remember

| Topic | Remember |
|---|---|
| Mutable / immutable | Mutable: list, dictionary. Immutable: int, float, string, tuple |
| Operator order | () → ** (right to left) → * / // % → + - → relational (< > == !=) → not → and → or |
| / vs // vs % | 7/2 = 3.5 (always float); 7//2 = 3; 7%2 = 1 (remainder) |
| Slicing | s[start:stop:step]; stop is never included; s[::-1] reverses |
| split() | returns a **list**; separator is removed |
| partition() | returns a **tuple of 3**: (before, sep, after); splits at the first match only |
| find() vs index() | find() returns -1 if not found; index() gives ValueError |
| capitalize() vs title() | "the truth" → "The truth" vs "The Truth" |
| strip(), lstrip(), rstrip() | remove spaces from both ends / left / right |
| isalpha(), isdigit(), isalnum(), isupper(), islower(), isspace() | return True or False |
| List add | append(x) adds one item at the end; extend(list) adds many; insert(i, x) adds at index i |
| List remove | pop() removes the last item (pop(i) removes index i); remove(x) removes first x by value; del L[i] |
| sort() vs sorted() | L.sort() changes L and returns None; sorted(L) returns a new list |
| Dictionary | keys(), values(), items(), get(k), update(d2), pop(k), popitem(), clear(), setdefault(k, v), fromkeys() |
| Loop on dict | `for k in D:` gives keys; `for k, v in D.items():` gives both |
| `in` on dict | checks **keys** only |
| Tuple with one item | t = (5,) (comma needed) |
| Function with no return | returns None |
| Scope | Assigning a variable inside a function makes it local, unless you write `global x` first |
| Default parameters | must come after positional ones: def f(a, b=5) |
| random | random() → 0 to <1; randint(a,b) → a to b (both included); randrange(a,b) → a to b-1 |
| Exceptions | try (risky code) → except (runs only if error) → finally (always runs). Common: ZeroDivisionError, ValueError, TypeError, IndexError, KeyError, NameError, EOFError, FileNotFoundError |
| Types of errors | Syntax error (rules broken, e.g. missing colon); run-time error (e.g. 5/0); logical error (wrong answer, no message) |

### 6b. File handling templates

| | Text file | Binary file | CSV file |
|---|---|---|---|
| Import | nothing | `import pickle` | `import csv` |
| Open to read | `open("a.txt","r")` | `open("a.dat","rb")` | `open("a.csv","r")` |
| Open to write (erase old) | `"w"` | `"wb"` | `open("a.csv","w",newline="")` |
| Open to add at end | `"a"` | `"ab"` | `"a"` with newline="" |
| Write | `f.write(str)`, `f.writelines(list)` | `pickle.dump(record, f)` | `w = csv.writer(f)`; `w.writerow(list)`, `w.writerows(list_of_lists)` |
| Read | `f.read()` (whole file as one string), `f.readline()` (one line), `f.readlines()` (list of lines) | `pickle.load(f)` in `while True:` inside `try ... except EOFError:` | `r = csv.reader(f)` then `for row in r:` (each row is a list of **strings**) |
| Close | `f.close()` | `f.close()` | `f.close()` |

**Text file counting template (fits almost every Q29):**
```python
def func():
    f = open("FILE.txt", "r")
    data = f.read()          # or: for line in f:
    words = data.split()
    count = 0
    for w in words:
        if <condition>:
            count += 1
    print(count)
    f.close()
func()
```
**Modes:** r (read; error if file missing), r+ (read + write), w (write; erases), w+ (write + read), a (append; pointer at end), a+ (append + read). Add b for binary. seek(offset, ref): ref 0 = start (default), 1 = current, 2 = end. tell() = current position.
**Absolute path:** full path from the drive, e.g. C:\\School\\data.txt. **Relative path:** from the current folder, e.g. data.txt.

**Stack template:**
```python
stack = []
def push(item):
    stack.append(item)            # add at the top
def pop():
    if stack == []:
        print("Underflow")        # or "Stack Empty"
    else:
        return stack.pop()        # remove from the top
```
Stack = **LIFO** (Last In, First Out). Push = append(); pop = pop(); top = stack[-1]. Overflow does not happen in a Python list; underflow = popping from an empty stack.

### 6c. SQL patterns (learn these 15) and the connectivity template

| Task | Query pattern |
|---|---|
| All rows | `SELECT * FROM T;` |
| Some columns with condition | `SELECT a, b FROM T WHERE cond;` |
| Range | `WHERE col BETWEEN 10 AND 20` (both included) |
| List of values | `WHERE col IN ('A', 'B')` |
| Pattern | `LIKE 'A%'` (starts with A), `'%a'` (ends with a), `'%an%'` (contains an), `'_a%'` (2nd letter a) |
| Missing value | `WHERE col IS NULL` / `IS NOT NULL` |
| Sort | `ORDER BY col` (ascending), `ORDER BY col DESC` |
| No repeats | `SELECT DISTINCT col FROM T;` |
| Aggregates | `COUNT(*)`, `COUNT(col)` (skips NULL), `SUM()`, `AVG()`, `MAX()`, `MIN()` |
| Group | `SELECT col, COUNT(*) FROM T GROUP BY col;` |
| Condition on group | `... GROUP BY col HAVING COUNT(*) > 1;` (WHERE is for rows, HAVING is for groups) |
| Alias | `SELECT Qty*Price AS Total FROM T;` |
| Change data | `UPDATE T SET col = value WHERE cond;` |
| Delete rows | `DELETE FROM T WHERE cond;` |
| Join two tables | `SELECT ... FROM A, B WHERE A.id = B.id;` (equi-join) or `FROM A NATURAL JOIN B` |
| Structure | `CREATE DATABASE d; USE d; SHOW DATABASES; SHOW TABLES; DESCRIBE T; DROP TABLE T; DROP DATABASE d;` |
| ALTER | `ALTER TABLE T ADD col INT;` `ALTER TABLE T DROP COLUMN col;` `ALTER TABLE T ADD PRIMARY KEY (col);` `ALTER TABLE T DROP PRIMARY KEY;` `ALTER TABLE T MODIFY col VARCHAR(30);` |
| Insert | `INSERT INTO T VALUES (1, 'Asha', 'XII', 4500.0);` (text and dates in quotes; numbers without quotes) |

**Key terms:** Relation = table; attribute = column; tuple = row; **degree** = number of columns; **cardinality** = number of rows; **domain** = set of allowed values for a column. **Candidate key** = any column(s) that can uniquely identify a row. **Primary key** = the candidate key chosen (unique + not NULL). **Alternate key** = candidate keys not chosen. **Foreign key** = a column that refers to the primary key of another table. Cartesian product: rows multiply, columns add.
**Data types:** CHAR(n) fixed length, VARCHAR(n) variable length, INT, FLOAT, DATE ('YYYY-MM-DD'). **Constraints:** NOT NULL, UNIQUE, PRIMARY KEY.

**Python-MySQL template (learn by heart):**
```python
import mysql.connector
con = mysql.connector.connect(host="localhost", user="root",
                              password="xyz", database="school")
cur = con.cursor()
cur.execute("SQL QUERY HERE")
con.commit()              # only for INSERT / UPDATE / DELETE
data = cur.fetchall()     # only for SELECT: list of tuples (fetchone() gives one row)
for row in data:
    print(row)
print(cur.rowcount)       # number of rows affected / fetched
con.close()
```
With input values: `cur.execute("INSERT INTO stu VALUES ({}, '{}')".format(r, n))` or `cur.execute("INSERT INTO stu VALUES (%s, %s)", (r, n))`.

### 6d. Networks: terms and the case-study answer key

**Full forms:** ARPANET (Advanced Research Projects Agency Network), NSFNET (National Science Foundation Network), LAN/MAN/WAN/PAN (Local/Metropolitan/Wide/Personal Area Network), NIC (Network Interface Card), MAC (Media Access Control), RJ45 (Registered Jack 45), IP (Internet Protocol), TCP (Transmission Control Protocol), HTTP(S) (HyperText Transfer Protocol (Secure)), FTP (File Transfer Protocol), SMTP (Simple Mail Transfer Protocol), POP3 (Post Office Protocol 3), PPP (Point-to-Point Protocol), VoIP (Voice over Internet Protocol), HTML (HyperText Markup Language), XML (eXtensible Markup Language), URL (Uniform Resource Locator), WWW (World Wide Web), Wi-Fi (Wireless Fidelity), Modem (Modulator-Demodulator).

**Protocols, one line each:** HTTP/HTTPS: web pages. FTP: file transfer. SMTP: **sending** email. POP3: **receiving/downloading** email. PPP: direct link between two devices. TCP/IP: basic rules of the internet (TCP breaks data into packets and checks them; IP addresses and routes them). TELNET: **remote login** to another computer. VoIP: voice/video calls over the internet.

**Devices, one line each:** Modem: converts digital ↔ analog signals (for the telephone line). Ethernet card / NIC: connects a computer to the network; has a MAC address. RJ45: 8-pin connector on an Ethernet cable. Repeater: regenerates a weak signal (use when cable > 100 m). Hub: connects computers; sends data to **all** ports. Switch: connects computers; sends data only to the **intended** port (smart hub). Router: connects different networks and finds the best path. Gateway: entry/exit point connecting networks that use different protocols. Wi-Fi card: wireless network card.

**Media:** Twisted pair (cheap, short distance), co-axial (TV cable), optical fibre (fastest, long distance, uses light, no interference). Radio waves (all directions, long distance, no line-of-sight; FM radio, mobiles). Microwaves (line-of-sight, point-to-point; satellite, radar). Infrared (very short distance; TV remote).

**Topologies:** Bus (one main cable; cheap; cable fault stops all). Star (all nodes to a central switch/hub; easy to find faults; hub failure stops all). Tree (stars connected to a bus backbone; hierarchy).

**Network types:** PAN (around one person, ~10 m, Bluetooth), LAN (one building/campus, up to about 1 km), MAN (a city), WAN (countries; the Internet is the largest WAN).

**Web terms:** WWW: all web pages linked on the internet. Website: a set of related web pages. Web browser: software to view web pages (Chrome). Web server: computer that stores websites and sends pages on request. Web hosting: renting space on a web server for your website. Domain name: name of a website (cbse.gov.in). HTML: describes how a page looks (fixed tags). XML: describes/stores data (user-defined tags).

**Bandwidth:** range of frequencies a channel can carry, measured in **Hz**. **Data transfer rate:** bits sent per second (bps, Kbps, Mbps, Gbps). **IP address:** unique numerical address of a device on a network (e.g. 192.168.1.10).

**Case study answer key (5 marks almost every year):**
1. **Server:** in the block with the **most computers** (reason: most traffic stays local).
2. **Layout:** star, with the server block at the centre (draw boxes and lines). If asked "shortest cable", you may join each block to its nearest block, but star from the server block is the safe answer.
3. **Switch/hub:** in **every** block.
4. **Repeater:** on any cable **longer than 100 m** (name those pairs).
5. **Router/Gateway/Modem for internet:** in the server block.
6. **Wired medium inside the campus:** Ethernet (twisted pair) cable; between far blocks or cities with high speed: **optical fibre**; very far/hilly areas: satellite (microwave).
7. **Network type:** inside the campus = LAN; between cities = WAN.
8. **Protocol:** video/voice meeting = VoIP; remote access = TELNET; file transfer = FTP; email = SMTP.

---

## 7. Answer-writing tips (to collect step marks) and a 30-day timetable

### 7a. Tips
1. **Never leave code blank.** Writing `def name():`, the correct `open()` line, `import pickle`/`import csv`, the loop and `close()` already earns 1-2 marks in a 3-5 mark question. The marking scheme gives ½ mark for each such line.
2. **Indentation matters.** Use 4 spaces consistently. Put a **colon** after def, if, elif, else, for, while, try, except, finally, with.
3. **Output questions:** make a small table of variable values for each loop step (a "dry run"). Write the output exactly: quotes and brackets for lists `['a', 'b']`, no quotes for printed strings, and note `end=` and `sep=`. A float has `.0` (45.0).
4. **Error-finding:** rewrite the **whole** code and **underline** each correction. Usual errors: missing colon, missing bracket, `Print` (capital P), wrong quotes, `=` instead of `==`, `/` instead of `%`, `range(L)` instead of `range(L-1, -1, -1)`, variable not set to 0 before use, wrong indentation.
5. **MCQs:** write the letter **and** the text of the answer (CBSE instruction). For A-R: first decide whether A is true, then whether R is true, then whether R explains A.
6. **SQL:** end every query with a semicolon. Put text and dates in single quotes ('Delhi', '2025-01-01'); do not put numbers in quotes. For an output question, draw a small table with column headings.
7. **Python-MySQL:** always write import, connect, cursor, execute, commit (for changes) or fetchall (for SELECT), close. These lines carry the marks even if the query has a small error.
8. **Case study:** write the answer **and** a one-line reason ("because it has the maximum number of computers"). Draw the layout with labelled boxes.
9. **Choose the easier OR option:** usually the theory/SQL one rather than a long program.
10. **Time plan (3 hours):** Section A 30 min, B 30 min, C 25 min, D 45 min, E 30 min, checking 20 min. Do SQL and networks first if they are your strong areas.

### 7b. 30-day study timetable (about 2 hours a day)

| Day | Task |
|---|---|
| 1 | Networks: devices, media, topologies, network types (6d; Q62, Q64, Q68) |
| 2 | Networks: protocols, full forms, web terms (Q63, Q65-Q67, Q69) |
| 3 | Networks: case study answer key; solve Q70, Q71, Q72. Write all full forms from memory. |
| 4 | SQL theory: keys, degree, cardinality, DDL/DML (Q73-Q77) |
| 5 | SQL: CREATE, ALTER, DROP, SHOW, DESCRIBE, INSERT (Q78-Q81) |
| 6 | SQL: SELECT with WHERE, BETWEEN, IN, LIKE, IS NULL, ORDER BY, DISTINCT (Q82) |
| 7 | SQL: aggregates, GROUP BY, HAVING, UPDATE, DELETE; outputs (Q83-Q84) |
| 8 | SQL: joins and Cartesian product (Q85-Q87). Practise all queries on the lab computer. |
| 9 | Python-MySQL template; write Q88-Q91 from memory twice |
| 10 | **Test 1:** all SQL + networks questions in Section 5 without looking. Check answers. |
| 11 | Stack template; Q58-Q59 |
| 12 | Stack: Q60-Q61. Write every stack program once more from memory. |
| 13 | Text files: modes, read/readline/readlines, seek/tell, with (Q47-Q48) |
| 14 | Text file programs: Q49-Q50 |
| 15 | Text file programs: Q51-Q52 (and the 3 "same template" variants) |
| 16 | CSV: Q56-Q57 |
| 17 | Binary: Q53-Q55 (focus on the load loop with try/except EOFError) |
| 18 | Python revision: strings and slicing (Q1-Q6) |
| 19 | Lists, tuples, operators, data types (Q7-Q12, Q16-Q18) |
| 20 | Dictionaries and built-in statements (Q13-Q14, Q19-Q22) |
| 21 | Output questions: Q23-Q25 (dry-run tables) |
| 22 | Output questions: Q26-Q28 |
| 23 | Error finding: Q29-Q32 |
| 24 | Functions and scope: Q33-Q38 |
| 25 | random module and exceptions: Q39-Q43; small list functions Q44-Q46 |
| 26 | Solve the **2026-27 SQP** in 3 hours. Mark it with the official marking scheme. |
| 27 | Redo every wrong answer from the SQP. Revise the quick sheet (Section 6). |
| 28 | Solve the **2026 board paper (Code 91)** in 3 hours |
| 29 | Revise all ★ questions in Section 5 |
| 30 | Light revision: 6a-6d tables, case-study key, connectivity template. Sleep early. |

**Practical file and project:** finish them **in school before January**. Run every program in your file at least once so you can explain it in the viva.

---

## 8. Sources (URLs actually opened)

**Official CBSE**
- 2026-27 curriculum (Computer Science 083, Classes XI-XII): https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Computer_Science_SecP2_2026-27.pdf (listed on https://cbseacademic.nic.in/curriculum_2027.html)
- 2026-27 SQP: https://cbseacademic.nic.in/web_material/SQP/ClassXII_2026_27/ComputerScience-SQP.pdf
- 2026-27 Marking Scheme: https://cbseacademic.nic.in/web_material/SQP/ClassXII_2026_27/ComputerScience-MS.pdf (listed on https://cbseacademic.nic.in/SQP_CLASSXII_2026-27.html)
- Board question papers (CBSE question paper archive on cbse.gov.in; set read in brackets):
  - 2026 (Code 91, Set 4): https://www.cbse.gov.in/cbsenew/question-paper/2026/XII/Computer_Science.zip
  - 2025 (Code 91, Set 4; scanned, read by OCR): https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/91_COMPUTER_SCIENCE.pdf
  - 2024 (Code 91, Set 4; scanned, read by OCR): https://www.cbse.gov.in/cbsenew/question-paper/2024/XII/Computer_Science.zip
  - 2023 (Code 91, Series NHHEFG; scanned, read by OCR): https://www.cbse.gov.in/cbsenew/question-paper/2023/XII/91_Computer_Science.zip
  - 2019 (Code 91, Series BVM, Delhi): from the same CBSE archive (old C++/Python syllabus)
- Pass criteria (33% separately in theory and practical, Class XII): https://www.cbse.gov.in/cbsenew/documents/Question_Answers_Controller_Examination_04032025_07032025.pdf

**Textbook:** NCERT Computer Science, Class XII (and Class XI for the Python revision topics).

*Model answers follow NCERT and the 2026-27 SQP marking scheme where the same question appears. Official marking schemes for the 2019-2026 board papers were not opened, so teachers should check any answer they want to use word-for-word against the CBSE marking scheme for that year. Where a scanned paper's table could not be read, that question was left out or a practice table was used instead (clearly marked "practice").*
