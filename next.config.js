module.exports = async () => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        optimizeFonts: true,
        ignoreBuildErrors: false,
    }
    return nextConfig
}