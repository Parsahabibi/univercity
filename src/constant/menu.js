export const menuItems = [
    { id: 1, text: 'درباره ما', link: '/about' },
    { id: 2, text: 'اخبار و رویداد ها', link: '/news' },
    {
        id: 3,
        text: 'دوره ها',
        link: '#',  // Placeholder, because this item will show a dropdown
        dropdown: [
            { text: 'پایتون', link: '/' },
            { text: 'وب', link: '/' },
            { text: 'UI/UX', link: '/' },
        ]
    },
    { id: 4, text: 'صفحه اصلی', link: '/' },
];
