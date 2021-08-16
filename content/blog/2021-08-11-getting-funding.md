+++
title = "How to get funding for software projects"

[extra]

author = "Thomas Pfau"
+++

### Part A: Where and how to get funding?

There are some guides about funding of open source software projects:
- <https://opensource.guide/getting-paid/#finding-funding-for-your-project>
- <https://github.com/nayafia/lemonade-stand>

They can give a general overview for open source funding. They might have value
for existing projects that need continuous funding as these projects by
demonstrating their use (Letters of support, Download/usage statistics,
citation count etc), have a better chance of convincing external funders of the
value they generate (even if only for the academic community). For funding
requests supporting existing projects it might also help to detail what will be
improved, what features will be added, and how the maintenance benefits the
quality of the project.  However, in general it seems easier to obtain funding
for new projects, since it seems that 'novel' ideas tend to be of greater
interest for public funders.

Here, we will list several existing options for funds for software projects in
(but not exclusively) academic settings: For quantum projects,
<https://unitary.fund> is a source of small (4000€) grants, that might be easily
accessible.  For visibility and project improvements, [Google Summer of
Code](https://summerofcode.withgoogle.com) and  [tweag open source
fellowship](https://boards.greenhouse.io/tweag/jobs/4638654002) offer a great
way to get interested students, or with tweag even more professional coders
into the project, test their potential (e.g. for a later masters/PhD) and get
new contributors for a project. However, the support is for a rather short time
(12 weeks).  In Germany, the DFG sometimes puts out calls for research software
(e.g. [2016 call for sustainable research software
development](https://www.dfg.de/foerderung/info_wissenschaft/2016/info_wissenschaft_16_71/)
or [2019 call for quality management in research
software](https://www.dfg.de/foerderung/info_wissenschaft/2019/info_wissenschaft_19_44/index.html))


### Part B: How can we get more funding for scientific software?

Overall, we got the impression, that many software projects are funded by being
hidden within larger grant proposals. While this works to get some funding, it
leads to an undesired invisibility of research software development, which
makes it difficult to get funding for projects. On the other hand decision
makers seem to be aware, that software is necessary, and there are even calls
which explicitly ask for details on what software funding there will be. As
such, it seems important to get grant-writers to stop the practice of hiding or
obfuscating software development in their grants but to explicitly list them
in the requirements and/or goals of the grant.  To achieve this it would also
be important to convince PIs that proper funding for research software
development is important, and present the advantages of having permanent
research software engineers.  Those include (but are not limited to):

- A RSE stays, and thus the knowledge about the code remains in house for future reference
- A RSE has a higher incentive to produce higher quality code, that stays useable even if they leave the institution
- Code development can be sped up if a RSE serves multiple groups by not having
  to replicate the same code multiple times (in contrast to individual
  PhDs/PostDocs who only code for "themselves")

A further argument, which needs some more work could be the time saved by
employing RSEs. This would require a survey of PIs on how much time they, or
their group spend on code development, and an estimate of how much time could
be saved by employing specialists for some of the tasks. This data would also
be important for higher level decision makers in order to show the value of
RSEs in research. To this end, it would be good to obtain more and clearer
statistics to demonstrate use and visibility as mentioned above. For some
languages, download statistics can easily be obtained by package managers (e.g.
conda/pip for python):
- [Pip Download badge for git](https://img.shields.io/pypi/dm/numpy?label=downloads%20%7C%20pip&logo=PyPI)
- [Conda download badge for git](https://img.shields.io/conda/dn/conda-forge/numpy?label=downloads%20%7C%20conda&logo=Conda-Forge)

We would need to check to what extend these are available for other languages.
Another important thing to remember is to make citing software easy by putting
it into code (e.g. a cite function), into the documentation, and in general
make it easily findable (since often a lack of easy citability will lead to
fewer citations). And in the end, citations are an important way to prove
impact for future funding.
