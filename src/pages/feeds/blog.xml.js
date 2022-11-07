import site from "../../data/config.yml";
import xmlEscape from "xml-escape";
import { loadBlogPosts } from "../../lib/util";

const posts = await loadBlogPosts();

export async function get() {

	return {
		body: `
		<?xml version="1.0" encoding="utf-8"?>
		<rss version="2.0"
		xmlns:content="http://purl.org/rss/1.0/modules/content/"
		xmlns:wfw="http://wellformedweb.org/CommentAPI/"
		xmlns:dc="http://purl.org/dc/elements/1.1/"
		xmlns:atom="http://www.w3.org/2005/Atom"
		xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
		xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
		>
		<channel>
			<title xml:lang="en">${ site.name }</title>
			<atom:link href="${ new URL(site.feed_source, site.url).href }" rel="self" type="application/rss+xml"/>
			<link>${ site.url }</link>
			<pubDate>${ (new Date()).toUTCString() }</pubDate>
			<lastBuildDate>${ (new Date()).toUTCString() }</lastBuildDate>
			<language>en-US</language>
			<generator>Astro</generator>
			<description>${ site.description }</description>

			${
				posts.slice(0, 10).map(({ frontmatter, compiledContent, url }) => `
					<item>
						<title>${ frontmatter.title }</title>
						<link>${ new URL(url, site.url).href }</link>
						<pubDate>${ frontmatter.date.toUTCString() }</pubDate>
						<dc:creator>Nicholas C. Zakas</dc:creator>
						${
							frontmatter.tags.map(tag => `<category>${ tag }</category>`).join("")
						}
						<guid isPermaLink="true">${ new URL(url, site.url).href }</guid>
						<description>${ frontmatter.teaser }</description>
						<content:encoded>${ xmlEscape(compiledContent()) }</content:encoded>
					</item>
				`.trim()).join("")
			}
			
			<item>
			<title>Why I decided to start investing in real estate in 2020</title>
			<link>https://money.humanwhocodes.com/blog/2020/12/why-invest-real-estate/</link>
			<pubDate>Mon, 28 Dec 2020 00:00:00 +0000</pubDate>
			<dc:creator>Nicholas C. Zakas</dc:creator>
			
			<category>Real Estate</category>
			
			<category>Investing</category>
			
			<category>Cash Flow</category>
			
			
			<category>Real Estate</category>
			
			<guid isPermaLink="true">https://money.humanwhocodes.com/blog/2020/12/why-invest-real-estate/</guid>
			<description>A lot of people were surprised when I suddenly announced at the end of 2020 that I was under contract to buy my first rental property. To some, this was completely out of character. Why would a software engineer who often spent his free time working on open source projects and writing books suddenly up...</description>
			<content:encoded>&lt;p&gt;A lot of people were surprised when I suddenly announced at the end of 2020 that I was under contract to buy my first rental property. To some, this was completely out of character. Why would a software engineer who often spent his free time working on open source projects and writing books suddenly up and decide to buy a rental property in the middle of a pandemic? Well, it wasn’t as sudden as you might expect.&lt;/p&gt;

		&lt;p&gt;As longtime followers know, I’ve been having some health problems that caused me to stop working full-time nearly five years ago. I wasn’t too worried at first. I figured that it might take a year to get back on my feet and I had $350,000 in savings accounts thanks to over a decade of well-paying jobs coupled with aggressive saving. I felt so confident in my financial position that when I was initially denied long-term disability, I considered not fighting that decision. I could certainly live off of my savings for a year and then I’d be right back to making the same salary I had before ($220,000/year) and I’d be fine. Little did I know that one year would go by very quickly. And so would the second. And here I am, almost five years later, still not even close to healthy enough to work full time.&lt;/p&gt;

		&lt;p&gt;Thanks to the advice of my doctor and lawyer, I did end up fighting for long-term disability and won, and I’m grateful I have it. The problem is that the disability payments don’t actually cover my expenses.&lt;/p&gt;

		&lt;h2 id=&quot;my-current-financial-picture&quot;&gt;My current financial picture&lt;/h2&gt;

		&lt;p&gt;These are the actual numbers I’m dealing with:&lt;/p&gt;

		&lt;table&gt;
		&lt;tbody&gt;
			&lt;tr&gt;
			&lt;td&gt;Monthly disability payment&lt;/td&gt;
			&lt;td&gt;$10,000&lt;/td&gt;
			&lt;/tr&gt;
			&lt;tr&gt;
			&lt;td&gt;Federal taxes (30%)&lt;/td&gt;
			&lt;td&gt;-$3,000&lt;/td&gt;
			&lt;/tr&gt;
			&lt;tr&gt;
			&lt;td&gt;Legal Fees (24%)&lt;/td&gt;
			&lt;td&gt;-$2,400&lt;/td&gt;
			&lt;/tr&gt;
			&lt;tr&gt;
			&lt;td&gt;&lt;strong&gt;Net payment&lt;/strong&gt;&lt;/td&gt;
			&lt;td&gt;&lt;strong&gt;$4,600&lt;/strong&gt;&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/tbody&gt;
		&lt;/table&gt;

		&lt;p&gt;I asked to have 30% federal taxes withheld even though my effective federal tax rate was 20% last year because I also end up paying 10% to the state of California. The disability company won’t withhold state taxes, so after I do my taxes I basically get a refund from the IRS that I end up paying directly to California.&lt;/p&gt;

		&lt;p&gt;The legal fees are what gets taken out of my payment each month by my lawyer. This is payment for representing me for the past five years and continually filing paperwork and going back-and-forth with the disability company. This amount hurts to lose, but I wouldn’t be getting any money without them, so it’s well worth it.&lt;/p&gt;

		&lt;p&gt;Now the bad news:&lt;/p&gt;

		&lt;table&gt;
		&lt;tbody&gt;
			&lt;tr&gt;
			&lt;td&gt;Net monthly disability payment&lt;/td&gt;
			&lt;td&gt;$4,600&lt;/td&gt;
			&lt;/tr&gt;
			&lt;tr&gt;
			&lt;td&gt;Rent&lt;/td&gt;
			&lt;td&gt;-$3,800&lt;/td&gt;
			&lt;/tr&gt;
			&lt;tr&gt;
			&lt;td&gt;Health insurance&lt;/td&gt;
			&lt;td&gt;-$890&lt;/td&gt;
			&lt;/tr&gt;
			&lt;tr&gt;
			&lt;td&gt;&lt;strong&gt;Net savings&lt;/strong&gt;&lt;/td&gt;
			&lt;td&gt;&lt;strong&gt;-$90&lt;/strong&gt;&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/tbody&gt;
		&lt;/table&gt;

		&lt;p&gt;Yes, you read that correctly. After paying just my rent and health insurance, I’m already at -$90 for the month. That’s before I pay for food, medicine, internet, phone, etc. So, every month I’m starting out needing to pull at least $90 from my savings.&lt;/p&gt;

		&lt;p&gt;(If your mind is trying to grapple with the rent number, remember I’m in Mountain View, California, one of the most expensive places to live in the country. And my rent was actually a bargain when I moved in almost three years ago.)&lt;/p&gt;

		&lt;p&gt;In reality, I’ve needed to pull $2,500 from my savings every month to make ends meet. That amount didn’t seem like a lot when I thought I’d be out of work for a year. Going on five years in, that is $150,000, and I’m still not sure when I’ll be able to get back to working full time.&lt;/p&gt;

		&lt;p&gt;You may be wondering where that $2,500 goes each month (so do I, sometimes). In reality, most of it goes to health-related costs: doctor visits, medications, and supplements. If I were healthy, I’d probably need to pull less than $1,000 extra each month from savings.&lt;/p&gt;

		&lt;h2 id=&quot;other-sources-of-income&quot;&gt;Other sources of income&lt;/h2&gt;

		&lt;p&gt;Thankfully, I do have some other sources of income, which has helped make sure I’m not just drawing down my savings:&lt;/p&gt;

		&lt;ul&gt;
		&lt;li&gt;&lt;strong&gt;Book royalties&lt;/strong&gt; - a little unpredictable, but has generally been around $40,000 each year for all of my books. Now starting to fall again as I’ve been unable to write any books in the past five years.&lt;/li&gt;
		&lt;li&gt;&lt;strong&gt;GitHub Sponsors&lt;/strong&gt; - for most of the year was around $150/month but now I’m at $1,500/month. Thank you to my sponsors! (&lt;a href=&quot;https://github.com/sponsors/nzakas&quot;&gt;Sponsor me&lt;/a&gt;)&lt;/li&gt;
		&lt;li&gt;&lt;strong&gt;Website affiliate/ad income&lt;/strong&gt; - also a little spotty but typically around $75/month combined.&lt;/li&gt;
		&lt;/ul&gt;

		&lt;p&gt;All of these sources are 1099 income, so I end up paying higher taxes than on the disability payments. While they do offset some of my deficit, they are all unpredictable, which is pretty uncomfortable when you’re burning your life savings every month.&lt;/p&gt;

		&lt;h2 id=&quot;enter-real-estate&quot;&gt;Enter real estate&lt;/h2&gt;

		&lt;p&gt;At the end of 2019, I knew I needed to make some kind of change to my financial situation. It was clear that I just didn’t know when I’d be well enough to get back to work, and while my savings was still relatively high, I knew I couldn’t afford another five years of this pattern. I needed to find a way to start creating monthly cash flow that I could rely on. That’s when I started reading about real estate investing.&lt;/p&gt;

		&lt;p&gt;To put it simply, the idea is to buy a property and then rent it out to someone else. As long as the rent is more than your mortgage payment, you have extra cash each month. The tenant pays off your mortgage and you get to pocket the rest. Of course, the math is actually a bit more complicated than that because you also have to fix things as they break, plan for major repairs like replacing the roof and heater, and pay taxes and insurance. But generally, as long as you are taking in more each month than you’re spending, you can get safe, predictable income.&lt;/p&gt;

		&lt;p&gt;As a practical example, let’s say I have $15,000 in a “high interest” savings account that is offering 0.5% interest. You’ll make about $75 in a year. Now say you use that $15,000 as a down payment on $75,000 house (yes, this is possible in the United States) and rent it out for $900/month. And let’s say after paying all of the monthly expenses on the property you end up with $200 left over. Over the course of a year you’ll have $2,400 based off of that initial $15,000 you invested. Quite a difference.&lt;/p&gt;

		&lt;p&gt;This approach works only if you don’t need access to that $15,000 directly. If you’re relying on that money to pay bills, then it’s definitely not a good idea to invest it in anything. But if the money is just sitting there collecting 0.5% interest in a savings account, and you won’t need that money for a few years, you can get a steady, safe cash flow by buying a rental property.&lt;/p&gt;

		&lt;p&gt;Fortunately for me, I understand my finances very well at this point, and I know how much I can afford to invest and how much I need on hand to pay bills. So after spending almost an entire year reading books, listening to podcasts, and researching ways to invest in real estate, I finally decided to take the plunge.&lt;/p&gt;

		&lt;h2 id=&quot;but-why-now&quot;&gt;But why now?&lt;/h2&gt;

		&lt;p&gt;The question I’ve been asked most frequently is not, “why are you investing in real estate?” because people generally understand it’s to make money. The question I’ve received the most is, “why are you investing in real estate right now?” The pandemic has everyone’s nerves on edge, people are at risk for eviction, who knows what the market will do. All of that is true. What’s also true is that people will always need some place to live.&lt;/p&gt;

		&lt;p&gt;Even during the pandemic, people are moving. If your plan is to invest in a major metropolitan area, that’s probably not a very good idea. People are currently moving away from cities and into the suburbs where it’s not so crowded. But my plan was not to invest in large cities, it’s to invest in the midwest where homes are still affordable and there are plenty of renters around.&lt;/p&gt;

		&lt;p&gt;Essentially, I feel like I’m protecting myself in two ways:&lt;/p&gt;

		&lt;ol&gt;
		&lt;li&gt;Buying a good property at or below market value that doesn’t require major fixes. Prices fluctuate less frequently in the midwest, so your money is more or less safe so long as you buy a decent property.&lt;/li&gt;
		&lt;li&gt;Finding good tenants. This is really the key to being a successful rental property owner. If someone has a job right now and has been employed at least six months, chances are their job is safe and won’t be affected by the pandemic. If they pass a criminal background check, eviction check, and credit check, they are probably trustworthy. If they are making three times the monthly rent each month, then you know they won’t have trouble coming up with rent each month.&lt;/li&gt;
		&lt;/ol&gt;

		&lt;p&gt;Plus, with interest rates at record lows, it’s worth looking at what your money can buy with a loan or mortage.&lt;/p&gt;

		&lt;h2 id=&quot;conclusion&quot;&gt;Conclusion&lt;/h2&gt;

		&lt;p&gt;Rental property investing is far from risk-free (no investing in risk-free), but in general, it’s a lot more predictable than other forms of investing. Unlike the stock market, where you have no control over how your money performs, you can make improvements to real estate to increase its value, you can increase rent to make more money, or you can sell the property to get your money back (maybe a bit more, if you’re lucky). I want to start now, while I still have a decent enough financial cushion, so I’m starting to make back some of the excess money I’m spending each month. Had I started investing five years ago, I probably would be making close to the extra money I need each month in rent.&lt;/p&gt;

		&lt;p&gt;So, I’m off to start my real estate journey, and I’ll be blogging about it all along the way.&lt;/p&gt;
		</content:encoded>
			</item>
			
		</channel>
		</rss>
		`.trim()
	};
}
