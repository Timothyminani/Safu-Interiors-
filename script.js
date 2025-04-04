
        let projects = [
            { 
                title: "Gyme", 
                images: ["gym1.jpg", "gym2.jpg", "gym3.jpg", "gym4.jpg"] 
            },
            { 
                title: "Residentiol",
                images: ["resident1.jpg", "resident2.jpg", "resident3.jpg", "resident4.jpg", "resident5.jpg"] 
            }
           
        ];

        let currentProjectIndex = 0;
        let currentImageIndex = 0;

        function openProject(index) {
            currentProjectIndex = index;
            currentImageIndex = 0;
            document.getElementById("lightbox-title").innerText = projects[index].title;
            document.getElementById("lightbox-img").src = projects[index].images[currentImageIndex];
            new bootstrap.Modal(document.getElementById("lightboxModal")).show();
        }

        function changeImage(direction) {
            let images = projects[currentProjectIndex].images;
            currentImageIndex += direction;

            if (currentImageIndex < 0) {
                currentImageIndex = images.length - 1;
            } else if (currentImageIndex >= images.length) {
                currentImageIndex = 0;
            }

            document.getElementById("lightbox-img").src = images[currentImageIndex];
        }
    