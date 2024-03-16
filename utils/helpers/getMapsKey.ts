const getMapsKey = (usersCustomKey: string | undefined) => {
  const GeoLocate_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string

  return { key: usersCustomKey || GeoLocate_MAPS_KEY }
}

export default getMapsKey
