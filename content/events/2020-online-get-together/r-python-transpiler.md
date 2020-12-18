+++
title = "R <-> Python transpiler"
template = "session.html"
[extra]
authors = "Dmitrii Borisevich"
session = "3.2"
duration = "15 min"
+++

Python and R are two major programming languages used for research software development and data analysis in bioinformatics. It is not a symbiotic relationship, but a cold war between the fans of both.

Different tools are available to use R in python and vice versa, but they demand learning both languages. This is not easy, and thus rarely adopted.

This talk will pitch an idea of using AST to build a transpiler between two languages and showcase a simple demo of converting code written in one language directly into another.

The talk will present:

- the R vs python problem and its consequences in bioinformatics,
- the idea of a transpiler,
- some examples of existing transpilers,
- a demo of R <-> python PoC transpiler.


---


#### Questions and comments


- comment: great point about tools possibly dividing communities
- Links for related software
    - The OneLang demo: <https://ide.onelang.io/> (<https://github.com/onelang/OneLang>)
    - Transfer data frames between python and R: <https://blog.rstudio.com/2016/03/29/feather/>
    - An Rstudio supported projects for using python code in R with R syntax: <https://cran.r-project.org/web/packages/reticulate/vignettes/calling_python.html>
    - A non-profit that has been supporting software development in both the PyData stack and R for the last decade: <https://numfocus.org/>
    - CBioVikings - Danish Comp Bio community - <https://twitter.com/CBioVikings>, <https://www.instagram.com/cbiovikings/>

- Q: optimal R programming would likely involve making use of its vectorization capabilities, for example by using apply functions instead of loops. Is this something that rtopython-mapping plans to implement?
    - numpy provides these opportunities, so it is possible, hopefully feasible :-)
- Q: Why the comments cannot be translated? Just currious.
    - this can be done, the PoC uses ASTs (abstract syntax trees) for the conversion, and comments are not a part of AST; but this could have been added on top
- Q: how it works under the hood?
    - AST converter from R to python for the grammar + huge map, implementing the functions from R as python AST structure

