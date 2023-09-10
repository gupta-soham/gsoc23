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

### Transcoding Bug Fix

- :bug: Fixed a bug in the transcode module to resolve synchronization issues when using `transcode:display` with paced outputs(UDP, HLS and display)
- :white_check_mark: Successfully closed issue [#25959](https://code.videolan.org/videolan/vlc/-/issues/25959) through this bug fix

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
- :open_book: Explored advanced subtitle formats like ASS, WebVTT but faced rendering issues at times

### Testing Subtitle Blending (Windows Build)

#### SRT Format

- Used the following command to blend SRT subtitles:

```
./vlc.exe video.mp4 --input-slave=sub.srt --sout="chromecast{ip=[ip address]}" --demux-filter=cc_demux --no-plugins-cache -vv | cat -

```

<table>
    <tr>
        <td><img src="https://github.com/gupta-soham/gsoc23/assets/97831613/9e58dd22-9f21-4621-973c-f5953e5d8d0c"></td>
        <td><img src="https://github.com/gupta-soham/gsoc23/assets/97831613/623bc8c5-8ce8-489c-80a0-f4b1151c8c82"></td>
        <td><img src="https://github.com/gupta-soham/gsoc23/assets/97831613/aa66140d-6db3-43b7-bed3-7052de313b18"></td>
    </tr>
</table>

#### ASS Format

- Used the following command to blend ASS subtitles:

```
./vlc.exe video.mp4 --input-slave=sub.ass --sout="chromecast{ip=[ip address]}" --demux-filter=cc_demux --no-plugins-cache -vv | cat -  
```
<table>
    <tr>
        <td><img src=""></td>
        <td><img src=""></td>
        <td><img src=""></td>
    </tr>
</table>

#### WebVTT Format

- Used the following command to blend WebVTT subtitles:

```
./vlc.exe video.mp4 --input-slave=sub.vtt --sout="chromecast{ip=[ip address]}" --demux-filter=cc_demux --no-plugins-cache -vv | cat -
```
<table>
    <tr>
        <td><img src=""></td>
        <td><img src=""></td>
        <td><img src=""></td>
    </tr>
</table>

### Tracing Flush sout callback

- :x: Trace module did not log Flush events in the JSON file in the Windows build

- :alarm_clock: Added timestamps for Flush events to enable tracing

- :chart_with_upwards_trend: Traced video frames to analyze timestamp issues


## Contributions

Over the course of GSoC 2023, I made the following contributions to the VLC project:

- Created 3 merge requests over the course of the program :twisted_rightwards_arrows:
    - [Transcoding Bux Fix](https://code.videolan.org/videolan/vlc/-/merge_requests/3804)
    - [HEVC Video Codec Implementation](https://code.videolan.org/asenat/vlc/-/merge_requests/19)
    - [fix: trace `Flush` sout callback]()
- Patches for issues like HTTPD URL deletion, GnuTLS, etc
- Clear documentation doubts through daily logs and merge request descriptions
- Responded to code reviews and made changes as per suggestions


## Learning Outcomes

Through this project, I greatly improved my skills in areas like:

- :wrench: Tooling - gcc, clang, docker, ffmpeg
- :computer: Application development - VLC architecture, FFmpeg transcoding, Chromecast protocols
- :octocat: Open Source Workflow - version control, build troubleshooting, submitting merge requests
    - Git Version Control --> `git commit --amend`, `git stash`, `git rebase`, `git reflog`, splitting commits, changing authors & many more in the process
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


## Final Weeks' Work

- :hourglass: Added delays using `vlc_tick_sleep` to extend video casting

- :bug: Debugged asserts and crashes during Chromecast streaming

- :white_check_mark: Got WebVTT subtitle blending working with Chromecast

- :package: Committed and pushed all code changes to respective branches which I made throughout the project timeline


## Branches Worked On

| Branch | Overview | Commits |
|-|-|-|  
| [chromecast-hls](https://code.videolan.org/sohamgupta/vlc/-/tree/chromecast-hls?ref_type=heads) | Initial work on Chromecast streaming | [View](https://code.videolan.org/sohamgupta/vlc/-/commits/chromecast-hls?ref_type=heads) |
| [rebased/chromecast-hls.2](https://code.videolan.org/sohamgupta/vlc/-/tree/rebased/chromecast-hls.2?ref_type=heads) | Final work on Chromecast streaming | [View](https://code.videolan.org/sohamgupta/vlc/-/commits/rebased/chromecast-hls.2?ref_type=heads) |
| [sout-hls.4](https://code.videolan.org/sohamgupta/vlc/-/tree/sout-hls.4?ref_type=heads) | H.265 codec implementation | [View](https://code.videolan.org/sohamgupta/vlc/-/commits/sout-hls.4?ref_type=heads) |
| [fix/transcode](https://code.videolan.org/sohamgupta/vlc/-/tree/fix%2Ftranscode?ref_type=heads) | Transcoding synchronization fix | [View](https://code.videolan.org/sohamgupta/vlc/-/commits/fix%2Ftranscode?ref_type=heads) |
| [trace](https://code.videolan.org/sohamgupta/vlc/-/tree/trace?ref_type=heads) | Added tracing module | [View](https://code.videolan.org/sohamgupta/vlc/-/commits/trace?ref_type=heads) |


## Acknowledgments

I'm grateful to my mentor Alaric Sénat for his invaluable guidance and support throughout this enriching journey.  
:pray: And a big thanks to the VideoLAN's VLC project maintainers and Google Summer of Code program for giving me this opportunity to learn and grow as a developer:man_technologist:!
