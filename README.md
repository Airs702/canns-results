# CANNs results gallery

Static companion site for:

> **CANNs: A Toolkit for Continuous Attractor Research**  
> He, Tuerhong, She, Chu, Wu, Zuo, and Wu (2026)

The site is a deliberately simple, full-resolution results gallery. It is
organized into six sections:

1. canonical CANN dynamics;
2. the complete four-population ASA band-cell analysis;
3. ASA head-direction-cell results from two MEC sessions;
4. single-cell CohoSpace, a selected cohort of 20 real MEC grid modules,
   and mouse grid-cell results for AO1, AO2, and AO5;
5. the currently verified vanilla-RNN ASA benchmark; and
6. the ASA graphical interface.

## Local preview

From this directory:

```bash
python3 -m http.server 8080
```

Then visit <http://localhost:8080/>.

## Deployment

This repository is deployed to GitHub Pages at:

<https://airs702.github.io/canns-results/>

The workflow at `.github/workflows/pages.yml` uploads the repository root as a
static Pages artifact whenever `main` is updated. The `.nojekyll` file keeps
the site independent of Jekyll processing.

## Project links

- Paper: <https://arxiv.org/abs/2606.27783>
- Code: <https://github.com/Routhleck/canns>

## Figure provenance

The figures in `assets/results/` are copied from validated local CANNs and ASA
analysis outputs. They are included without resampling so visitors can inspect
the full-resolution originals through the page lightbox. The mouse GridScore
TDA panels are labelled as maxdim-1, no-shuffle diagnostics, and the RNN section
is labelled as the verified grid-selected benchmark rather than a dedicated
band-cell result.
