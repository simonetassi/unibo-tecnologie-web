<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html" encoding="iso-8859-1" indent="yes"/>

	<xsl:template match="/">
		<html>
			<head>
				<title><xsl:call-template name="title"/></title>
				<link rel="stylesheet" type="text/css" href="css/base2.css" />
			</head>
			<body>
				<xsl:apply-templates/>
			</body>
		</html> 
	</xsl:template>

	<xsl:template match="film">
				<table width="500" border="1" cellpadding="10" cellspacing="0">
					<tr>
						<td colspan="2">
							<xsl:apply-templates select="titolo"/>
							<xsl:apply-templates select="anno"/>
						</td>
					</tr>
					<tr>
						<td rowspan="3"><xsl:apply-templates select="locandina"/></td>
						<td><xsl:apply-templates select="regista"/></td>
					</tr>
					<tr>
						<td><xsl:apply-templates select="attori"/></td>
					</tr>
					<tr>
						<td><xsl:apply-templates select="sale"/></td>
					</tr>
					<tr>
						<td align="left"><xsl:call-template name="leftButton"/></td>
						<td align="right"><xsl:call-template name="rightButton"/></td>
					</tr>
				</table>
	</xsl:template>
	<xsl:template name="title">
		<xsl:value-of select="film/titolo"/> in <xsl:value-of select="count(film/sale/sala)"/> cinema
	</xsl:template>
	<xsl:template name="leftButton">
		<xsl:variable name="prec">
			<xsl:choose>
				<xsl:when test="@id &gt; 0"><xsl:value-of select="@id - 1"/></xsl:when>
				<xsl:otherwise>0</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<p class="small"><a href="4levels.php?id={$prec}">&lt;- Film precedente</a></p>
	</xsl:template>
	<xsl:template name="rightButton">
		<xsl:variable name="seg">
			<xsl:choose>
				<xsl:when test="(@id &lt; (@max - 2))"><xsl:value-of select="1 + @id"/></xsl:when>
				<xsl:otherwise><xsl:value-of select="@max - 1"/></xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<p class="small"><a href="4levels.php?id={$seg}">-&gt; Film seguente</a></p>
	</xsl:template>
	
	<xsl:template match="titolo">
		<p class="big center">Scheda del film <br/><xsl:apply-templates/></p>
	</xsl:template>
	<xsl:template match="anno">
		<p class="small center">(<xsl:apply-templates/>)</p>	
	</xsl:template>
	<xsl:template match="locandina">
		<img width="250" alt="locandina" src="img/{.}"/>
	</xsl:template>
	<xsl:template match="regista">
		<p class="small"><b>Regia di: </b><xsl:apply-templates/></p>	
	</xsl:template>
	<xsl:template match="attori">
		<p class="small">
			<b>Con: </b><xsl:apply-templates/>
		</p>	
	</xsl:template>
	<xsl:template match="sale">
		<p class="small">
			<b>Al cinema: </b><xsl:apply-templates/>
		</p>	
	</xsl:template>
	<xsl:template match="attore|sala">
			<span><xsl:apply-templates/><xsl:if test="position()&lt;last()">, </xsl:if></span>
	</xsl:template>


</xsl:stylesheet>
