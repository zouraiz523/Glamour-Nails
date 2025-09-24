     // Sample data for services
        const services = [
            {
                title: "Classic Manicure",
                price: "$25",
                image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
                description: "Basic nail care including shaping, cuticle care, and polish application."
            },
            {
                title: "Gel Manicure",
                price: "$45",
                image: "https://images.unsplash.com/photo-1598620617137-2ab990aadd37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                description: "Long-lasting gel polish that stays shiny and chip-free for weeks."
            },
            {
                title: "Nail Art Design",
                price: "$15+",
                image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
                description: "Custom nail art designs from simple patterns to intricate artwork."
            },
            {
                title: "Spa Manicure",
                price: "$55",
                image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                description: "Luxurious treatment with exfoliation, massage, and hydrating masks."
            },
            {
                title: "Acrylic Nails",
                price: "$60",
                image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                description: "Durable acrylic extensions for longer, stronger nails."
            },
            {
                title: "Nail Repair",
                price: "$20",
                image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
                description: "Fix broken or damaged nails with our professional repair service."
            }
        ];

        // Sample data for gallery
        const galleryImages = [
            "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            "https://images.unsplash.com/photo-1598620617137-2ab990aadd37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
            "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        ];

        // Sample data for videos
        const videos = [
            {
                title: "Floral Nail Art Tutorial",
                description: "Learn how to create beautiful floral designs",
                thumbnail: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            },
            {
                title: "Gel Manicure Application",
                description: "Step-by-step guide to perfect gel application",
                thumbnail: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            },
            {
                title: "Acrylic Nails for Beginners",
                description: "Everything you need to know about acrylics",
                thumbnail: "https://images.unsplash.com/photo-1598620617137-2ab990aadd37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            },
            {
                title: "Nail Care Routine",
                description: "Maintain healthy nails with these tips",
                thumbnail: "https://images.unsplash.com/photo-1607779044265-ef182050823e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            },
            {
                title: "French Manicure Technique",
                description: "Classic French tips made easy",
                thumbnail: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
            },
            {
                title: "Nail Art with Gems",
                description: "Add sparkle to your nails with gems",
                thumbnail: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
            }
        ];

        // Initialize the page
        $(document).ready(function() {
            // Mobile menu toggle
            $('#menuToggle').click(function() {
                $('#navLinks').toggleClass('active');
            });

            // Smooth scrolling for navigation links
            $('a[href*="#"]').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate(
                    {
                        scrollTop: $($(this).attr('href')).offset().top - 70,
                    },
                    500,
                    'linear'
                );
            });

            // Initialize carousel
            initCarousel();

            // Load initial services (first 3)
            loadServices(0, 3);

            // Load more services
            $('#loadMoreBtn').click(function() {
                const currentCount = $('.service-card').length;
                if (currentCount < services.length) {
                    loadServices(currentCount, 3);
                    
                    // If all services are loaded, hide the button
                    if (currentCount + 3 >= services.length) {
                        $(this).text('All Services Loaded').prop('disabled', true);
                    }
                }
            });

            // Load gallery images
            loadGallery();

            // Load videos
            loadVideos();

            // Initialize map
            initMap();

            // Show WhatsApp float after delay
            setTimeout(function() {
                $('#whatsappFloat').addClass('show');
            }, 3000);

            // WhatsApp click event
            $('#whatsappFloat').click(function() {
                window.open('https://wa.me/1234567890?text=Hi%20Glamour%20Nails%2C%20I%20would%20like%20to%20book%20an%20appointment', '_blank');
            });

            // Contact form submission
            $('.contact-form').submit(function(e) {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            });

            // Animate elements on scroll
            animateOnScroll();

            // Show discount popup after page loads
            setTimeout(function() {
                $('#discountPopup').addClass('show');
            }, 1000);

            // Close discount popup
            $('#discountClose, #discountLater').click(function() {
                $('#discountPopup').removeClass('show');
            });
        });

        // Function to initialize carousel
        function initCarousel() {
            let currentSlide = 0;
            const totalSlides = 4;
            const slideInterval = 3000; // 3 seconds
            
            // Function to go to a specific slide
            function goToSlide(slideIndex) {
                currentSlide = slideIndex;
                $('#carouselSlides').css('transform', `translateX(-${currentSlide * 25}%)`);
                
                // Update indicators
                $('.indicator').removeClass('active');
                $(`.indicator[data-slide="${currentSlide}"]`).addClass('active');
            }
            
            // Auto advance slides
            setInterval(function() {
                currentSlide = (currentSlide + 1) % totalSlides;
                goToSlide(currentSlide);
            }, slideInterval);
            
            // Click on indicators to go to specific slide
            $('.indicator').click(function() {
                const slideIndex = parseInt($(this).attr('data-slide'));
                goToSlide(slideIndex);
            });
        }

        // Function to load services
        function loadServices(start, count) {
            const end = Math.min(start + count, services.length);
            const servicesGrid = $('#servicesGrid');
            
            for (let i = start; i < end; i++) {
                const service = services[i];
                const serviceCard = `
                    <div class="service-card">
                        <div class="service-img">
                            <img src="${service.image}" alt="${service.title}">
                        </div>
                        <div class="service-content">
                            <h3>${service.title}</h3>
                            <p>${service.description}</p>
                            <div class="price">${service.price}</div>
                            <a href="#contact" class="btn">Book Now</a>
                        </div>
                    </div>
                `;
                servicesGrid.append(serviceCard);
            }
            
            // Animate the newly added cards
            setTimeout(() => {
                $('.service-card').each(function(index) {
                    $(this).delay(100 * index).queue(function(next) {
                        $(this).addClass('animate');
                        next();
                    });
                });
            }, 100);
        }

        // Function to load gallery
        function loadGallery() {
            const galleryGrid = $('#galleryGrid');
            
            galleryImages.forEach(image => {
                const galleryItem = `
                    <div class="gallery-item">
                        <img src="${image}" alt="Nail Art">
                        <div class="gallery-overlay">
                            <i class="fas fa-search-plus"></i>
                        </div>
                    </div>
                `;
                galleryGrid.append(galleryItem);
            });
            
            // Animate gallery items
            setTimeout(() => {
                $('.gallery-item').each(function(index) {
                    $(this).delay(100 * index).queue(function(next) {
                        $(this).addClass('animate');
                        next();
                    });
                });
            }, 100);
        }

        // Function to load videos
        function loadVideos() {
            const videoScroll = $('#videoScroll');
            
            videos.forEach(video => {
                const videoItem = `
                    <div class="video-item">
                        <div class="video-thumbnail">
                            <img src="${video.thumbnail}" alt="${video.title}">
                            <div class="play-btn">
                                <i class="fas fa-play"></i>
                            </div>
                        </div>
                        <div class="video-info">
                            <h3>${video.title}</h3>
                            <p>${video.description}</p>
                        </div>
                    </div>
                `;
                videoScroll.append(videoItem);
            });
            
            // Add click event to play buttons
            $('.play-btn').click(function() {
                alert('Video would play here in a real implementation');
            });
        }

        // Function to initialize map
        function initMap() {
            // In a real implementation, you would use the Google Maps API
            // For this example, we'll create a simple placeholder
            const mapContainer = $('#map');
            mapContainer.html(`
                <div style="width:100%;height:100%;background:#e5e7eb;display:flex;align-items:center;justify-content:center;">
                    <div style="text-align:center;">
                        <i class="fas fa-map-marker-alt" style="font-size:3rem;color:#ff6b8b;margin-bottom:1rem;"></i>
                        <h3 style="color:#374151;">Glamour Nails Location</h3>
                        <p style="color:#6b7280;">123 Beauty Street, City, State 12345</p>
                    </div>
                </div>
            `);
        }

        // Function to animate elements on scroll
        function animateOnScroll() {
            // Create an intersection observer
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        $(entry.target).addClass('animate');
                    }
                });
            }, observerOptions);
            
            // Observe service cards and gallery items
            $('.service-card, .gallery-item').each(function() {
                observer.observe(this);
            });
        }