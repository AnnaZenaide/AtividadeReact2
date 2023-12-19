import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'


export const head = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" ></script>
                <script src="https://code.jquery.com/jquery-3.7.1.slim.min.js"></script>
            </Helmet>
        </HelmetProvider>
    )
}