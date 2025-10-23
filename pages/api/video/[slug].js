export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Redirect to the actual Vercel Blob URL
  const { slug } = req.query;
  const videoMap = {
    'episode1': 'https://liak4p2lf7j65g3i.public.blob.vercel-storage.com/XDD%20PRODUCTIONS%20EP%201%20%281%29.mp4',
    'episode2': 'https://liak4p2lf7j65g3i.public.blob.vercel-storage.com/FAAAAHHH.mp4'
  };

  if (videoMap[slug]) {
    res.redirect(videoMap[slug]);
  } else {
    res.status(404).json({ error: 'Video not found' });
  }
}
