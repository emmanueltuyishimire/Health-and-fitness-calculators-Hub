<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <title>XML Sitemap</title>
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            font-size: 16px;
            color: #333;
          }
          #sitemap {
            width: 100%;
            max-width: 800px;
            margin: 2rem auto;
            border-collapse: collapse;
          }
          #sitemap th, #sitemap td {
            padding: 12px 15px;
            text-align: left;
          }
          #sitemap th {
            background-color: #f2f2f2;
            font-weight: bold;
          }
          #sitemap tr {
            border-bottom: 1px solid #ddd;
          }
          #sitemap tr:hover {
            background-color: #f5f5f5;
          }
          a {
            color: #007bff;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          h1 {
            font-size: 24px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <table id="sitemap">
          <thead>
            <tr>
              <th>URL</th>
              <th>Last Modified</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td>
                  <xsl:variable name="loc" select="sitemap:loc"/>
                  <a href="{$loc}"><xsl:value-of select="$loc"/></a>
                </td>
                <td>
                  <xsl:value-of select="sitemap:lastmod"/>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
