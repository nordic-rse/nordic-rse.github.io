+++
title = "How to be a 'good' git evangelist?"

[extra]

author = "Sunniva Indrehus"
+++

**Text credit**

This text is based on the notes from the community discussion ['How to be a
'good' git
evangelist?'](https://hackmd.io/@nordic-rse/rJEwuct2O#Discussion-Git-evangelist)
which took place during the online *[Unconference
event](https://nordic-rse.org/events/2021-online-unconference/)* of the Nordic
RSE community on the 29th of June 2021.


## The modern scientist's toolbox

Basic usage and skills of computational knowledge are becoming more and more
important in academic fields. Both the biologist, physicist, psychologist, and
the economist are expected, to some kind of extent, to know how to use and
write small scripts to accompany their scientific arguments. To do this in a
successful way 'good' scientific software is needed.

<img src="/blog/computational-science.png" style="width: 400px;" alt="A definition of computational science"/>

*A definition of computational science. [Figure credit](https://computingstudy.wordpress.com/scientific-computing)*.

'Good' scientific software does not have one clear definition. Dependent on the
discipline and field you will get different answers. Some main points that most
users/developers of scientific codes would agree upon are that 'good scientific
software' is something that is:
* working
* standardized
* understandable
* reproducible
* maintainable

<img src="/blog/wtfs.png" style="width: 400px;" alt="One way to measure code quality"/>

*One way to measure code quality.* [Figure credit](https://commadot.com/wtf-per-minute/).

To help the user/developer accomplish 'good' scientific software there exist
several modern tools. Some of these are:
* version control systems (VCS)s
* documentation (in code, [Read the Docs](https://readthedocs.org/), examples, etc.)
* modern editors
* proper debugging tools
* containers

All of them are important in the modern scientist's toolkit but seen from the
RSE perspective the deployment and usage of VCSs are often not taken advantage
of in scientific domains where coding and software itself is not the
deliverable.

This text aims a giving you some techniques or arguments you could use to
convince your team that it is time to invest in learning to use version
control. We also explore some of the broad tasks that can be more easily
accomplished with the usage of modern VCSs and make the daily life of the
modern scientist easier.


### How can scientists be motivated to learn to use version control?

According to [Wikipedia](https://en.wikipedia.org/wiki/Version_control), the
first deliberate revision control system was published in 1975. Modern version
control is most popularly used for tracking changes in a codebase over time.
For this reason, there is also reason to think that this is the only type of
task which is relevant to use VCS for.

*How can scientists be motivated to learn to use version control?*

- *Ability to use advanced regret button.* The first introduction to version
  control on a computer is done by pressing *ctrl+z* in a gmail or office
  document. When writing or collaborating on a longer text, [the nightmare
  before version control](https://www.youtube.com/watch?v=CvbLVVRzJF8) or
  having folders with documents like
  *version_final_x_modified_PI_comments.docx*, x=[1, 2, ...] quickly becomes a
  mess.

- *Automatic backups.* Remembering to take a backup of your work in progress
  and keep safe copies is an extremely good idea if your computer crashes,
  dies, or gets stolen. To complete a typical master thesis in a modern
  university will contain some kind of scripts used to construct a lot of
  figures and plots made by changing or commenting in and out some lines of
  code. If properly explained and introduced, VCSs can be used to track these
  changes so one **never** needs to wonder about which configuration that made
  that figure. You can keep track of changes in a document, for instance, TeX,
  logging your daily work, and collaborating with your colleagues.

- *Better platform for collaboration.* The moment the coding work is shared
  with colleagues there is a need for a platform for sharing files and scripts.
  Sending zip-files over mail is not a modern or ideal way of sharing code.

- *The experimental analog:* If you were doing a scientific experiment, would
  you ever trust your instruments if they were not calibrated? To have a
  successful experiment you will need the right tool for the right job. When
  touching something data scienceish on a computer, settings for versioning is
  essential for reproducibility.

- *You will probably need it later to be taken seriously.* Most of the students
  taking a master or PhD today will not stay in Academia. If one decides to
  join the industry or another part of the *real world*, academic programmers
  are not known for good quality on their [academic
  software](https://lemire.me/blog/2012/06/18/on-the-quality-of-academic-software/)
  or [scientific
  code](https://techblog.bozho.net/the-astonishingly-low-quality-of-scientific-code/).
  To be taken seriously as a software engineer or data scientist the use of VCS
  is a critical tool.

- *A way to track unforeseen consequences.* If something is changed somewhere in
  a code base/script it can have unforeseen effects in other parts of a project.
  Without VCS it is difficult to know when we have introduced such problems or
  solutions. In research projects these changes are usually something we need
  to know since the changes affect our thinking and conclusions which again
  can/will affect other research projects. It's not good enough to say "well it
  got fixed at some point. let's just be happy that it is correct now"

- *A way to track unforeseen consequences.* If something is changed somewhere
  in a codebase/script it can have unforeseen effects on other parts of a
  project. Without VCS it is difficult to know when we have introduced such
  problems or solutions. In research projects, these changes are usually
  something we need to know since the changes affect our thinking and
  conclusions which again can/will affect other research projects. It’s not
  good enough to say “well, it got fixed at some point. let’s just be happy
  that it is correct now”.


### How can we be 'good' git ambassadors in our communities?

In the days before markdown and sleek web interfaces version control was a tool
for the dedicated developer. Today, there exists a broad range of modern
graphical user interfaces that simplify the mysteries of *branches* and
*merge*. Convincing people that the time invested in learning to use these
modern tools will pay off is a big part of the RSE job.

*How can we be 'good' git ambassadors in our communities?*

- *Enforce the use of technical solutions.* If someone asks you for help you
  could provide the solution via GitHub/GitLab/Bitbucket/etc. Embracing one of
  the nice and modern web interfaces like Github can take away a lot of the
  complexity for beginners. Remember that you might need to provide some
  assistance with how to use the platform.

- *Promote workshops.* Share workshops like
  [Coderefinery](https://coderefinery.org/workshops/upcoming/) and [Software
  Carpentry](https://software-carpentry.org/workshops/) with students and
  colleagues can lower the bar to get people to start using VCSs.

- *Use (positive) social control.* Among same or similar level researchers and
  RSEs it is easier to make suggestions like starting to use git. Even in the
  fields where the researchers do not develop their own code, but only use
  software written by others, there is a potential to use VCSs to simplify
  their daily work. One could use VCS to track the different kinds of
  *experiments* conducted when they run code. Changing one parameter, changing
  to another parameter, etc.

- *VCS helps the reproducibility of research.* There are starting to come
  requirements from journals and conferences on the
  [reproducibility](https://www.cs.mcgill.ca/~jpineau/ReproducibilityChecklist.pdf)
  of code used in scientific settings. By enforcing good standards as early as
  possible one are sure to be good enough when this is actually needed.

- *Convince the authorities.* As an individual alone, it can be very hard to
  convince colleagues to understand why they should invest in learning version
  control. With the authorities are *onboard* you can make your life easier.
  Younger individuals in academia (young post-docs, PhD and master students)
  are easier to convince than the older generation (permanent staff like
  researchers and professors).

- *Make it a requirement in research grants.* In our modern scientific world, a
  common task differentiation is to give the programming job and the details to
  the youngsters let the older generation handle the overall picture and
  long-term planning. As a result, there is still quite common in academia that
  people working with code today do not use VCS because their supervisors did
  not use it in their work and they are not encouraged to invest their time to
  learn how to use this tool. If the principal investigators for research
  grants can be convinced to _require_ researchers to work a particular way, it
  can be very effective to tip the standards in a good direction.

- *Make it a required skill for individuals.* Include experience, or the
  willingness to learn, VCSs a requirement when hiring new people in the group.


### When should we learn to use VCS?

From an RSEs perspective version control could easily be introduced right after
the first code line successfully prints `hello world`, but it is not *useless*
to learn at any other point.

*When should we learn to use VCS?*

- *From the beginning.*  Most students will start their programming career by
  writing small scripts or completing examples. By introducing VCS at the same
  time the complexity of the usage can grow with the learner's needs.

- *Wait until needed in daily work.* It is hard to imagine an effective and
  successful code collaboration between more than one person without having
  some rules for contributions etc. Waiting until one sees the need for the
  tool can also be a good strategy. Maybe not all projects need to use a VCS,
  but at the point where one starts to collaborate with other people, VCS is
  extremely useful.


### How and who should teach VCS best practices?

There are workflows that are considered as standards and certain *forbidden*  commands one should not use when working with VCSs.

*How and who should teach VCS best practices?*

<img src="/blog/typical-git-usage.png" style="width: 300px;" alt="Typical git usage in a nutshell"/>

*Typical git usage in a nutshell? [Figure credit](https://xkcd.com/1597/)*.

- *Include VCS in university courses* VSC or Git can quite easily be included
  as a smaller part of a Python course + Git as a part of a *scientific
  software development practice* course. Based on experience it is important to
  make the learners repeat what they have learned in other settings where they
  can continue to use the tool for their own needs. University courses that
  have coding exercises could choose to use a collaborative platform where the
  students can clone repositories and submit answers. The learners would then
  start to use version control in a setting where it can not be questioned. For
  students at the PhD-level, there are usually a certain amount of credits that
  must be taken. By integrating git in the curriculum all students will hear
  about git at one point.

- *Volunteer learning initiatives.* Workshops and courses hosted by
  organizations like
  [Coderefinery](https://coderefinery.org/workshops/upcoming/) and [Software
  Carpentry](https://software-carpentry.org/workshops/) are great examples of
  settings where learners in communities without RSEs or technical competence
  in VCS could get hands-on experience and start working. If you have the
  capacity to give a hand, like being a
  [helper](https://coderefinery.org/get-involved/#become-a-workshop-helper),
  host or instructor, you can


## Summary

If you are an RSE preaching git to colleagues you can try to use [*'good
enough' practices for scientific
computing*](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005510).
Remember that every scientist does not need to master all aspects of VCS to
make use of it in their daily work.

<img src="/blog/preaching.jpg" style="width: 300px;" alt="Preaching scientific software"/>

*In the RSE church, it is effective to preach 'good enough' scientific software.
Figure credit: Michele Rosenthal*.
