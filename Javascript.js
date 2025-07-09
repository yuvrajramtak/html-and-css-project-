   
        function toggleMenu() {
            document.querySelector('.nav-links').classList.toggle('active');
        }

         const videos = document.querySelectorAll("video");

    function playVideo(videoId, button) {
      const currentVideo = document.getElementById(videoId);

      // Pause all other videos
      videos.forEach(video => {
        if (video.id !== videoId) {
          video.pause();
          video.removeAttribute("controls");

          // Show button again
          const btn = video.parentElement.querySelector(".play-button");
          if (btn) btn.style.display = "block";
        }
      });

      // Play selected video
      currentVideo.setAttribute("controls", "controls");
      currentVideo.play();

      // Hide its play button
      button.style.display = "none";
    }
    