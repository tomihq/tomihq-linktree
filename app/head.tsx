//TODO: Add more data for SEO meta tags for each page.

export default function Head({title = 'LinkTreeClone'}) {
    return (
      <>
        <title> {title} - tomihq</title>  
        <meta name="viewport" content="width=device-width, initial-scale=1"  />
        <link rel="icon" href="/favicon.ico" />
      </>
    );
  }
