interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'M.F.M Fazrin', // Site author
	title: 'Dotnet evangelist', // Site title.
	description:
		'Dotnet evangelist is a blog website that showcases the latest and greatest of Microsoft tech stack. Whether you are a beginner or a seasoned developer, you will find something useful and interesting on this site. You will learn how to use various Microsoft technologies, such as .NET, Azure, Visual Studio, JetBrains Rider, C#, ASP.NET, Blazor, Xamarin, and more, to create amazing applications for web, mobile, desktop, and cloud. You will also get tips and tricks, best practices, tutorials, and code samples from experienced and passionate Microsoft evangelists. Dotnetevangelist is your one-stop destination for all things Microsoft. Subscribe to the blog and stay updated with the latest news, articles, and resources on Microsoft tech stack.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
