+++
title = "R <-> Python transpiler"
template = "session.html"
[extra]
authors = "Dmitrii Borisevich"
session = "3.2"
+++

Python and R are two major programming languages used for research software development and data analysis in bioinformatics. It is not a symbiotic relationship, but a cold war between the fans of both.

Different tools are available to use R in python and vice versa, but they demand learning both languages. This is not easy, and thus rarely adopted.

This talk will pitch an idea of using AST to build a transpiler between two languages and showcase a simple demo of converting code written in one language directly into another.

The talk will present:

- the R vs python problem and its consequences in bioinformatics,
- the idea of a transpiler,
- some examples of existing transpilers,
- a demo of R <-> python PoC transpiler.
