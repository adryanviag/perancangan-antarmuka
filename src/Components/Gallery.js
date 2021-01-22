import React from 'react'
import Photo from './reusable/Photo'

const photos = [
    {
        title: 'Solok, West Sumatera',
        desc: "It was in my dad's house whe he was a kid. It's so cold here..",
        img: './perancangan-antarmuka/img/gallery/1.png',
        alt: 'image-1'
    },
    {
        title: 'Payakumbuh, West Sumatera',
        desc: 'Makan jagung bakar di Kelok 9 with my friend.',
        img: './perancangan-antarmuka/img/gallery/2.png',
        alt: 'image-2'
    },
    {
        title: 'Rokan Hulu, Riau',
        desc: 'Main basket di lapangan SMAN 1 Ujungbatu, SMA saya dulu.',
        img: './perancangan-antarmuka/img/gallery/3.png',
        alt: 'image-2'
    },
    {
        title: 'Pekanbaru, Riau',
        desc: 'Pasca aksi G17S, tentang asap kebakaran hutan di Riau.',
        img: './perancangan-antarmuka/img/gallery/4.png',
        alt: 'image-2'
    },
    {
        title: 'Pariaman, West Sumatera',
        desc: 'Foto bersama dosen saya di Ilkom UNRI, pak Zaiful Bahri.',
        img: './perancangan-antarmuka/img/gallery/5.png',
        alt: 'image-2'
    },
    {
        title: 'Pekanbaru, Riau',
        desc: 'Langit ungu di jalan Kamboja, what a beautiful view.',
        img: './perancangan-antarmuka/img/gallery/7.jpg',
        alt: 'image-2'
    },
    {
        title: 'Padang, West Sumatera',
        desc: 'It was in taplau or local call it "Tapi Lauik", means seaside.',
        img: './perancangan-antarmuka/img/gallery/5.jpg',
        alt: 'image-2'
    },
]

const Gallery = () => {
    return (
        <div className="bg-gray-200">
            <div className="bg-beigeh mb-3 shadow-md">
                <div className="text-center py-4 sm:py-10">
                    <h1 className="about font-bold md:text-7xl sm:text-5xl tracking-tight text-3xl">Gallery</h1>
                    <p className="md:text-xl text-lg mx-12 tracking-tighter">Beautiful memories</p>
                </div>
            </div>
            <section>
                {photos.map((photo, i) => {
                    return <Photo {...photo} key={i} />
                })}
            </section>
        </div>
    )
}

export default Gallery
