+++
title = "MXAimbot - AI-based sample centering for macromolecular crystallography"
template = "session.html"
[extra]
authors = "Isak Lindhé"
session = "2.1"
+++

### What is this?

MXAimbot is a neural network based tool currently in development, designed to
relieve researchers of the task of manually and individually centering their
samples in synchrotron beamlines for macromolecular crystallography.


### How does it do that?

It is a pretty simple CNN trained on a few thousand images from a camera
pointed at the loop which holds the samples. These images are annotated with
coordinates, height, and width.


### Why?

Because the other two alternatives are

1. Manual centering by humans, which is boring and tedious and consumes researchers valuable time.
2. X-ray centering, which can cause radiation-damage the crystal.
