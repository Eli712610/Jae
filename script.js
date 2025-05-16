// ===== SCRIPT.JS =====
// Memastikan DOM telah dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {
    // Alert yang muncul saat halaman utama dimuat
    if (document.querySelector('.earth-container')) {
        setTimeout(function() {
            alert("🌍 Halo pejuang bumi! Yuk lestarikan lingkungan bersama!");
        }, 1000);
    }
    
    // Mengambil elemen tombol di halaman utama
    const joinButton = document.getElementById('joinButton');
    
    // Jika tombol ditemukan, tambahkan event listener
    if (joinButton) {
        joinButton.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px) rotate(3deg)';
        });
        
        joinButton.addEventListener('mouseout', function() {
            this.style.transform = '';
        });
        
        joinButton.addEventListener('click', function() {
            // Ubah teks tombol saat diklik
            this.textContent = "Yeay kamu keren! 😍";
            
            // Kembalikan teks setelah 2 detik
            setTimeout(() => {
                this.textContent = "🌈 Ayo Ikut Kampanye! 👉 Klik aku dong!";
            }, 2000);
        });
    }
    
    // Mengambil elemen form di halaman daftar
    const registrationForm = document.getElementById('registrationForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    
    // Jika form ditemukan, tambahkan event listener
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            // Mencegah form untuk dikirim ke server (untuk demo)
            event.preventDefault();
            
            // Animasi submit
            const submitButton = document.getElementById('submitButton');
            submitButton.textContent = "🎉 Mengirim... 🎉";
            submitButton.style.backgroundColor = "#388e3c";
            
            // Simulasi pengiriman form (delay 1.5 detik)
            setTimeout(function() {
                // Sembunyikan form dan tampilkan pesan terima kasih
                registrationForm.style.display = 'none';
                thankYouMessage.classList.remove('hidden');
                
                // Tambahkan efek konfeti
                createConfetti();
            }, 1500);
        });
    }
    
    // Fungsi untuk membuat animasi konfeti saat form berhasil dikirim
    function createConfetti() {
        const confettiColors = ['#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107'];
        const confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti-container';
        confettiContainer.style.position = 'absolute';
        confettiContainer.style.top = '0';
        confettiContainer.style.left = '0';
        confettiContainer.style.width = '100%';
        confettiContainer.style.height = '100%';
        confettiContainer.style.overflow = 'hidden';
        confettiContainer.style.pointerEvents = 'none';
        confettiContainer.style.zIndex = '9999';
        document.body.appendChild(confettiContainer);
        
        // Buat 100 konfeti
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
                
                // Style untuk konfeti
                confetti.style.position = 'absolute';
                confetti.style.width = Math.random() * 10 + 5 + 'px';
                confetti.style.height = Math.random() * 10 + 5 + 'px';
                confetti.style.backgroundColor = color;
                confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                confetti.style.opacity = Math.random() * 0.5 + 0.5;
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.top = -20 + 'px';
                
                // Tambahkan konfeti ke container
                confettiContainer.appendChild(confetti);
                
                // Animasi jatuh
                const fallDuration = Math.random() * 3 + 2;
                const swingDuration = Math.random() * 2 + 1;
                
                // Animasi dengan CSS
                confetti.style.animation = `fall ${fallDuration}s linear, swing ${swingDuration}s ease-in-out infinite alternate`;
                
                // Style untuk animasi
                const styleSheet = document.styleSheets[0];
                if (!document.querySelector('style#confetti-styles')) {
                    const styleEl = document.createElement('style');
                    styleEl.id = 'confetti-styles';
                    styleEl.textContent = `
                        @keyframes fall {
                            to { transform: translateY(${window.innerHeight}px); }
                        }
                        @keyframes swing {
                            from { transform: translateX(-20px) rotate(-20deg); }
                            to { transform: translateX(20px) rotate(20deg); }
                        }
                    `;
                    document.head.appendChild(styleEl);
                }
                
                // Hapus konfeti setelah animasi selesai
                setTimeout(() => {
                    confetti.remove();
                }, fallDuration * 1000);
            }, i * 50); // Stagger konfeti
        }
        
        // Hapus container setelah semua konfeti selesai
        setTimeout(() => {
            confettiContainer.remove();
        }, 8000);
    }
    
    // Efek lucu pada elemen-elemen interaktif
    makeElementsPlayful();
    
    // Fungsi untuk membuat beberapa elemen lebih playful
    function makeElementsPlayful() {
        // Buat emoji daun bergerak pada background
        if (document.querySelector('main')) {
            createFloatingLeaves();
        }
        
        // Tambahkan efek gelembung pada input form saat diketik
        const formInputs = document.querySelectorAll('.cute-input');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.boxShadow = '0 0 15px rgba(76, 175, 80, 0.5)';
            });
            
            input.addEventListener('blur', function() {
                this.style.boxShadow = '';
            });
            
            if (input.type !== 'checkbox') {
                input.addEventListener('input', function() {
                    // Buat gelembung kecil saat mengetik
                    if (Math.random() > 0.7) {
                        createBubble(this);
                    }
                });
            }
        });
    }
    
    // Fungsi untuk membuat daun melayang di background
    function createFloatingLeaves() {
        const leaves = ['🌿', '🍃', '🌱', '🍂', '🍁'];
        const leafContainer = document.createElement('div');
        leafContainer.className = 'floating-leaves';
        leafContainer.style.position = 'fixed';
        leafContainer.style.top = '0';
        leafContainer.style.left = '0';
        leafContainer.style.width = '100%';
        leafContainer.style.height = '100%';
        leafContainer.style.pointerEvents = 'none';
        leafContainer.style.overflow = 'hidden';
        leafContainer.style.zIndex = '-1';
        document.body.appendChild(leafContainer);
        
        // Buat 15 daun melayang
        for (let i = 0; i < 15; i++) {
            const leaf = document.createElement('div');
            const leafType = leaves[Math.floor(Math.random() * leaves.length)];
            leaf.textContent = leafType;
            leaf.style.position = 'absolute';
            leaf.style.fontSize = Math.random() * 20 + 15 + 'px';
            leaf.style.opacity = Math.random() * 0.5 + 0.2;
            leaf.style.left = Math.random() * 100 + '%';
            leaf.style.top = Math.random() * 100 + '%';
            
            // Animasi melayang
            const floatDuration = Math.random() * 20 + 10;
            const rotateDuration = Math.random() * 10 + 5;
            
            leaf.style.animation = `
                floatLeaf ${floatDuration}s linear infinite,
                rotateLeaf ${rotateDuration}s ease-in-out infinite alternate
            `;
            
            // Tambahkan leaf ke container
            leafContainer.appendChild(leaf);
        }
        
        // Style untuk animasi daun
        if (!document.querySelector('style#leaf-styles')) {
            const styleEl = document.createElement('style');
            styleEl.id = 'leaf-styles';
            styleEl.textContent = `
                @keyframes floatLeaf {
                    0% { transform: translate(0, 0); }
                    25% { transform: translate(20px, 20px); }
                    50% { transform: translate(0, 40px); }
                    75% { transform: translate(-20px, 20px); }
                    100% { transform: translate(0, 0); }
                }
                @keyframes rotateLeaf {
                    from { transform: rotate(-10deg); }
                    to { transform: rotate(10deg); }
                }
            `;
            document.head.appendChild(styleEl);
        }
    }
    
    // Fungsi untuk membuat gelembung saat mengetik di form
    function createBubble(inputElement) {
        const bubble = document.createElement('div');
        const x = inputElement.offsetLeft + Math.random() * inputElement.offsetWidth;
        const y = inputElement.offsetTop;
        
        bubble.style.position = 'absolute';
        bubble.style.left = x + 'px';
        bubble.style.top = y + 'px';
        bubble.style.width = '10px';
        bubble.style.height = '10px';
        bubble.style.borderRadius = '50%';
        bubble.style.backgroundColor = 'rgba(76, 175, 80, 0.2)';
        bubble.style.pointerEvents = 'none';
        bubble.style.zIndex = '100';
        bubble.style.animation = 'bubble 2s ease-out forwards';
        
        document.body.appendChild(bubble);
        
        // Style untuk animasi bubble
        if (!document.querySelector('style#bubble-styles')) {
            const styleEl = document.createElement('style');
            styleEl.id = 'bubble-styles';
            styleEl.textContent = `
                @keyframes bubble {
                    0% { transform: scale(0); opacity: 0.7; }
                    50% { opacity: 0.5; }
                    100% { transform: scale(2) translateY(-30px); opacity: 0; }
                }
            `;
            document.head.appendChild(styleEl);
        }
        
        // Hapus bubble setelah animasi selesai
        setTimeout(() => {
            bubble.remove();
        }, 2000);
    }
});