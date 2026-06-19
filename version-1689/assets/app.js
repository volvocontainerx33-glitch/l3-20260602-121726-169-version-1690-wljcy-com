import { H as Hls } from './hls-dru42stk.js';

const menuButton = document.querySelector('[data-menu-button]');
const menuPanel = document.querySelector('[data-menu-panel]');

if (menuButton && menuPanel) {
    menuButton.addEventListener('click', () => {
        menuPanel.classList.toggle('open');
    });
}

const slides = Array.from(document.querySelectorAll('.hero-slide'));
const dots = Array.from(document.querySelectorAll('.hero-dots button'));
let activeSlide = 0;

function showSlide(index) {
    if (!slides.length) {
        return;
    }

    activeSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('active', slideIndex === activeSlide);
    });
    dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('active', dotIndex === activeSlide);
    });
}

if (slides.length) {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    showSlide(0);
    setInterval(() => showSlide(activeSlide + 1), 5200);
}

const searchInput = document.querySelector('[data-search-input]');
const searchCount = document.querySelector('[data-search-count]');
const movieCards = Array.from(document.querySelectorAll('.movie-card'));

function applySearch() {
    if (!searchInput || !movieCards.length) {
        return;
    }

    const keyword = searchInput.value.trim().toLowerCase();
    let visible = 0;

    movieCards.forEach((card) => {
        const text = [
            card.dataset.title || '',
            card.dataset.year || '',
            card.dataset.tags || '',
            card.textContent || ''
        ].join(' ').toLowerCase();
        const matched = !keyword || text.includes(keyword);
        card.classList.toggle('hidden-card', !matched);
        if (matched) {
            visible += 1;
        }
    });

    if (searchCount) {
        searchCount.textContent = String(visible);
    }
}

if (searchInput) {
    searchInput.addEventListener('input', applySearch);
    applySearch();
}

const playButton = document.querySelector('[data-m3u8]');
const player = document.querySelector('#moviePlayer');
const playerStatus = document.querySelector('[data-player-status]');
let hlsInstance = null;

function setPlayerStatus(text) {
    if (playerStatus) {
        playerStatus.textContent = text;
    }
}

async function startPlayback() {
    if (!playButton || !player) {
        return;
    }

    const streamUrl = playButton.dataset.m3u8;
    playButton.style.display = 'none';
    setPlayerStatus('正在加载影片，请稍候');

    try {
        if (hlsInstance) {
            hlsInstance.destroy();
            hlsInstance = null;
        }

        if (Hls.isSupported()) {
            hlsInstance = new Hls({
                enableWorker: true,
                lowLatencyMode: false,
                backBufferLength: 90
            });
            hlsInstance.loadSource(streamUrl);
            hlsInstance.attachMedia(player);
            hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
                setPlayerStatus('');
                player.play().catch(() => {
                    setPlayerStatus('点击播放器继续观看');
                });
            });
            hlsInstance.on(Hls.Events.ERROR, (_event, data) => {
                if (data && data.fatal) {
                    setPlayerStatus('播放连接暂时不可用，请刷新后重试');
                    playButton.style.display = '';
                }
            });
        } else if (player.canPlayType('application/vnd.apple.mpegurl')) {
            player.src = streamUrl;
            player.addEventListener('loadedmetadata', () => {
                setPlayerStatus('');
                player.play().catch(() => {
                    setPlayerStatus('点击播放器继续观看');
                });
            }, { once: true });
        } else {
            setPlayerStatus('当前设备暂不支持此播放格式');
            playButton.style.display = '';
        }
    } catch (_error) {
        setPlayerStatus('播放初始化失败，请刷新后重试');
        playButton.style.display = '';
    }
}

if (playButton) {
    playButton.addEventListener('click', startPlayback);
}
