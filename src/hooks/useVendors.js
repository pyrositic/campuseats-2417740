import { useEffect, useState } from 'react'

export function useVendors() {
  const [vendors, setVendors] = useState([]) //actual vendor lists
  const [loading, setLoading] = useState(true) //starts true, dh fetch ke?
  const [error, setError] = useState(null) //ada network error?
  const [reloadKey, setReloadKey] = useState(0) //trigger to refetch

  useEffect(() => {
    const controller = new AbortController() //if user blah before fetch siap 
    setLoading(true)
    setError(null)

    fetch('/api/vendors.json', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('Request failed: ' + res.status)
        return res.json()
      })
      .then((data) => {
        setVendors(data)
        setLoading(false)
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        setError(err.message)
        setLoading(false)
      })

    return () => controller.abort() //stop operation
  }, [reloadKey]) //run bila page load, rerun only when reloadKey changes (reload function called)

  function reload() {
    setReloadKey((k) => k + 1)
  }

  return { vendors, loading, error, reload }
}

/***we use usevendors to get vendors.js bcs:
1. real app taks simpan dekat react, but in server
2. simulate loading and error
3. reusability so that comp lain can call this hook and get vendors, loading, error, reload***/