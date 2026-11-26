export type ProductCategory = 'audio' | 'phone' | 'tablet' | 'laptop'

export interface Product {
    id: string
    code: string
    name: string
    category: ProductCategory
    spec: string
    price: number
    tagline: string
    description: string
    highlights: string[]
}

export const PRODUCTS: Product[] = [
    {
        id: 'ear-1',
        code: '01',
        name: 'Heesu Ear (1)',
        category: 'audio',
        spec: 'ANC · 45dB',
        price: 149,
        tagline: 'Pure sound. Transparent engineering.',
        description: 'Custom 11.6mm dynamic drivers housed in an ultra-lightweight transparent casing with adaptive active noise cancellation.',
        highlights: ['Up to 45dB Hybrid ANC', '34 hours total playback with case', 'Dual-device connection'],
    },
    {
        id: 'headphone-a',
        code: '02',
        name: 'Heesu Headphone (a)',
        category: 'audio',
        spec: 'Spatial · 40hr',
        price: 249,
        tagline: 'Studio acoustics without the weight.',
        description: 'Precision-milled aluminum earcups paired with memory-foam cushions and low-latency lossless wireless audio.',
        highlights: ['40mm bio-cellulose drivers', '40-hour battery life', 'USB-C lossless DAC mode'],
    },
    {
        id: 'phone-1',
        code: '03',
        name: 'Heesu Phone (1)',
        category: 'phone',
        spec: '6.7" OLED · 120Hz',
        price: 599,
        tagline: 'Less distraction. More intention.',
        description: 'Symmetrical bezels, monochrome-first OS, and rear LED glyph notifications engineered for glanceable utility.',
        highlights: ['6.7" LTPO OLED (1–120Hz)', 'Dual 50MP OIS camera system', 'Glyph notification matrix'],
    },
    {
        id: 'phone-1a',
        code: '04',
        name: 'Heesu Phone (1a)',
        category: 'phone',
        spec: '6.5" AMOLED · 50MP',
        price: 399,
        tagline: 'Essential hardware, refined.',
        description: 'All-day battery efficiency and tactile physical controls in a durable matte-textured frame.',
        highlights: ['6.5" 120Hz AMOLED display', '5000mAh battery · 45W fast charge', 'Zero-bloat Heesu OS'],
    },
    {
        id: 'pad-pro',
        code: '05',
        name: 'Heesu Pad Pro',
        category: 'tablet',
        spec: '11" Tandem OLED',
        price: 699,
        tagline: 'A canvas built for focus.',
        description: 'Ultra-thin 5.3mm unibody slate with high-brightness tandem OLED and magnetic stylus support.',
        highlights: ['11" Tandem OLED · 1000 nits', 'Quad-speaker array', 'Magnetic pin keyboard connector'],
    },
    {
        id: 'book-14',
        code: '06',
        name: 'Heesu Book 14',
        category: 'laptop',
        spec: '14" 2.8K · 16GB RAM',
        price: 1099,
        tagline: 'Industrial workstation portability.',
        description: 'CNC-machined chassis weighing 1.24kg with a 3:2 aspect ratio display and mechanical-feel key travel.',
        highlights: ['14" 2.8K 120Hz 3:2 display', '16GB LPDDR5X · 1TB NVMe SSD', 'Dual Thunderbolt 4 ports'],
    },
]