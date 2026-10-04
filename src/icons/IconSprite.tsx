export default function IconSprite() {
    return (
            // <!-- Icon sprite: one definition reused by every card through a use reference -->
    <svg className="svg-sprite" aria-hidden="true" focusable="false">
        <symbol id="icon-pin" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8Z" stroke="currentColor"
                strokeWidth="1.8" />
            <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
        </symbol>
        <symbol id="icon-facebook" viewBox="0 0 24 24">
            <path fill="currentColor"
                d="M13.6 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.6 1.7-1.6h1.7V3.5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.2H7.5V13h2.8v8h3.3Z" />
        </symbol>
        <symbol id="icon-x" viewBox="0 0 24 24">
            <path d="M4.5 4.5 19.5 19.5M19.5 4.5 4.5 19.5" stroke="currentColor" strokeWidth="2.6"
                stroke-linecap="round" />
        </symbol>
        <symbol id="icon-instagram" viewBox="0 0 24 24">
            <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="17" cy="7" r="1.2" fill="currentColor" />
        </symbol>
        <symbol id="icon-youtube" viewBox="0 0 24 24">
            <rect x="2.6" y="5.4" width="18.8" height="13.2" rx="4.2" stroke="currentColor" strokeWidth="1.8" />
            <path fill="currentColor" d="M10.2 9.1 15.6 12l-5.4 2.9V9.1Z" />
        </symbol>
        <symbol id="icon-book" viewBox="0 0 24 24" fill="none">
            <path
                d="M12 7.4C10.6 6 8.6 5.4 6 5.4H3.6v11.2H6c2.4 0 4.4.6 6 2 1.6-1.4 3.6-2 6-2h2.4V5.4H18c-2.6 0-4.6.6-6 2Z"
                stroke="currentColor" strokeWidth="1.8" stroke-linejoin="round" />
            <path d="M12 7.4v11.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </symbol>
    </svg>
    );
}