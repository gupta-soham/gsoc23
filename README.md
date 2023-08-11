# Google Summer of Code 2023 Work Product Submission

### Student: [Soham Gupta](https://code.videolan.org/sohamgupta)
### Organisation: [VideoLAN](https://www.videolan.org/)
### Project: [Improve Chromecast Support (subtitles)](https://summerofcode.withgoogle.com/programs/2023/projects/465XuPyw)

## Introduction

Over the past 3 months, I had the opportunity to work on the VLC project for Google Summer of Code 2023. It was an invaluable learning experience that helped me grow my skills in software development and open source contribution. In this blog, I'll summarize my work and key learnings.


## About the Project

:movie_camera: The project involved enhancing the capabilities of VLC's HTTP Live Streaming (HLS) module by:

- [x] Implementing support for H.265/HEVC video codec
- [x] Improving performance of video casting to Chromecast 
- [x] Enabling blending of subtitles with videos

I worked primarily on the `chromecast-hls` branch under the guidance of my mentor Alaric Sénat and org admins Thomas Guillem and Jean-Baptiste Kempf.


## Work Summary

Here are some highlights of what I was able to accomplish over the course of the program:

### H.265/HEVC Video Codec Implementation

- :mag: Researched details of implementing H.265 support 
- :wrench: Added code to generate H.265 codec information in `codecs.c`
- :white_check_mark: Transcoded sample videos to H.265 using ffmpeg and tested with hls module
- :x: Faced challenges manipulating profile/level values to match H.265 codec syntax

### Chromecast Performance Improvements

- :electric_plug: Troubleshot various connectivity issues between VLC and Chromecast device
- :construction_worker: Rebuilt code frequently to address streaming problems 
- :signal_strength: Worked around WSL2 network limitations to get video casting working
- :zzz: Reduced lag and improved synchronization of audio/video casting

### Subtitle Blending

- :speech_balloon: Successfully blended SRT subtitles with videos using soverlay parameter
- :rewind: Fixed timing issues causing subtitles to be out of sync
- :closed_book: Explored advanced subtitle formats like ASS, WebVTT but faced rendering issues

### Transcoding Bug Fix

- :bug: Fixed a bug in the transcode module to resolve synchronization issues when using `transcode:display` with paced outputs(UDP, HLS and display)
- :white_check_mark: Successfully closed issue [#25959](https://code.videolan.org/videolan/vlc/-/issues/25959) through this bug fix


## Contributions

Over the course of GSoC 2023, I made the following contributions to the VLC project:

- 2 merge requests merged :twisted_rightwards_arrows:
    - [Transcoding Bux Fix](https://code.videolan.org/videolan/vlc/-/merge_requests/3804)
    - [HEVC Video Codec Implementation](https://code.videolan.org/asenat/vlc/-/merge_requests/19)
- Patches for issues like HTTPD URL deletion, GnuTLS, etc
- Clear documentation doubts through daily logs and merge request descriptions
- Responded to code reviews and made changes as per suggestions


## Learning Outcomes

Through this project, I greatly improved my skills in areas like:

- :wrench: Tooling - gcc, clang, docker, ffmpeg
- :computer: Application development - VLC architecture, FFmpeg transcoding, Chromecast protocols 
- :octocat: Open source workflow - version control, build troubleshooting, submitting merge requests
- :pencil2: Technical communication - daily logs, merge request descriptions, collaborating with mentor

## Future Scope

While I was able to complete core objectives, some areas of improvement remain:

- [ ] Add support of fragmented mp4 in the HLS server
- [ ] Achieve 1:1 matching of H.265 codec profile/level values
- [ ] Reduce audio/video sync issues during Chromecast streaming
- [ ] Support text subtitle formats like WebVTT
- [ ] Improve modularisation and memory management

I'm excited to continue contributing to VLC and build on the work done during GSoC 2023.


## Challenges Faced :boom:

Throughout the program, I encountered various challenges that tested my problem-solving skills:

- :electric_plug: Connectivity issues between VLC and the Chromecast device due to network limitations of WSL2. This required extensive troubleshooting.

- :wrench: Frequent rebuild errors during cross-compilation that needed debugging of outdated contribs and prebuilt contribs.

- :x: Manipulating the profile and level values to match the H.265 codec syntax was difficult without proper documentation.

- :rewind: Synchronization problems between audio and video streams during Chromecast casting. Identifying the root cause took time.

- :zzz: Limitations on video segment duration and buffers caused intermittent casting failures.

- :bug: The initial part of videos without audio failed to render in the transcoded stream.

- :question: Absence of logs and abrupt UI closures made it hard to pinpoint errors.

- :hammer_and_pick: Frequent merge conflicts and overwrite errors while rebasing branches caused delays.

By persevering through these roadblocks, I improved my debugging skills and learned how to approach problems methodically. Special thanks to my mentor for their invaluable guidance when I was stuck.


## Acknowledgments

I'm grateful to my mentor Alaric Sénat for their invaluable guidance and support throughout this enriching journey.  
:pray: And a big thanks to the VideoLAN's VLC project maintainers and Google Summer of Code program for giving me this opportunity to learn and grow as a developer!