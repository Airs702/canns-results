# CANNs results gallery

Static companion site for:

> **CANNs: A Toolkit for Continuous Attractor Research**  
> He, Tuerhong, She, Chu, Wu, Zuo, and Wu (2026)

The site presents selected model, simulation, benchmark, and neural-recording results used in the CANNs paper and conference posters.

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

The figures in `assets/figures/` are copied from the final CANNs poster asset set. They are included without resampling so visitors can inspect the full-resolution originals through the page lightbox.
