import { Meta, Title } from "@angular/platform-browser";
import { OnInit, Injectable } from "@angular/core";
import { metaTagsAndTitleModle } from "../Service and Model/serviceAndMeta.Model";

@Injectable()
export class MetaTagAndTitleService implements OnInit {
  constructor(private metaTagService: Meta, private titleService: Title) { }

  titleAndMetatagsArray: metaTagsAndTitleModle[] = [
    {
      title: "AKSCELLENCE INFO",
      image: "src/favicon.ico",
      keywordContent:

        "",
      descriptionContent: "Akscellence brings together business intelligence and knowledge, technical innovation, and people to enable the business to achieve their business objectives.."
    },
    {
      title: "BI & Analytics",
      image:"http://akscellenceinfo.in/assets/images/images.jpg",
      keywordContent:
        "BI, Power BI ,Business Analytics ",
      descriptionContent:
        "Businesses today must be able to glean insight and understand the value from every purchase, Tweet, and customer care interaction. Our team can help you unlock this business value from mountains of data. Our cost-effective and comprehensive Business Intelligence (BI) and Analytics services provide a foundation for insight and analysis to help you make more insightful business decisions, take bold action, and execute quickly."
    },
    {
      title: "Sitecore services",
      keywordContent:
        "Sitecore",
      descriptionContent: "Sitecore is a customer experience management product with everything needed to create the most potent, relevant, and individualized customer experiences.."
    },
    {
      title: "Integration solution using web methods",
      keywordContent:
        "SQL server Integration services,web methods",
      descriptionContent: ""
    },
    {
      title: "eCommerce website development",
      keywordContent:
        "eCommerce website development, eCommerce website",
      descriptionContent: ""
    },
    {
      title: "content management system",
      keywordContent:
        "content management system,Umbraco ,nopcommerce,Sitecore",
      descriptionContent: ""
    },
    {
      title: "Dotnet framework ",
      keywordContent:
        ".net, .net framework",
      descriptionContent: ""
    },
    {
      title: "About us ",
      keywordContent:
        "Akscellence",
      descriptionContent: "We provide consultancy, technology and outsourcing solutions  to enable organizations to achieve their business objectives  and long vision through increased IT efficiency and solutions.  We are IT Company with Focus on IT Services and Staffing.  We focus primarily on custom business Applications  Development and maintenance."
    },
    {
      title: "Life At Akscellence",
      keywordContent:
        "",
      descriptionContent: "We are a young team of dynamic tech professionals who believe in transparent work culture. Here are a lot of opportunities to learn and grow."
    },
    {
      title: "blog",
      keywordContent:
        "",
      descriptionContent: "Official Blog of Akscellence info solution. Get latest update about the BI, "
    },
    {
      title: "Frequently Asked Questions",
      keywordContent:
        "",
      descriptionContent: "Here is the list of Frequently Asked Question by Akscellence Info. Know more about our service and offering. you can ask any question if you have."
    },
    {
      title: "Career ",
      keywordContent:
        "",
      descriptionContent: ""
    },
    {
      title: "Careers ",
      keywordContent:
        "",
      descriptionContent: "As a global IT innovator, we are looking for talented individuals to join our team – from recent college grads to industry veterans. Whether you are looking for a full-time, part-time, consulting, or contract position, we have a host of opportunities for you to explore.Any resource on H1 Visa also is welcome to join us. Our company can do H1 transfer. We offer better than market salary plus benefits and GC (process to start right away) etc."
    },
    {
      title: "Experience & Professional ",
      keywordContent:
        "",
      descriptionContent: ""
    },
    {
      title: "ContactUs ",
      keywordContent:
        "",
      descriptionContent: ""
    },
    {
      title: "Leadership Ashish-sharma ",
      keywordContent:
        "",
      descriptionContent: ""
    },
    {
      title: "Leadership Kamesh jha",
      keywordContent:
        "",
      descriptionContent: ""
    },
    {
      title: "Leadership Pranay gupta",
      keywordContent:
        "",
      descriptionContent: ""
    },
    {
      title: "Leadership Sanjay-sharma",
      keywordContent:
        "",
      descriptionContent: ""
    }
  ];

  ngOnInit() { }

  getTitleAndMetaTags(id: number) {
    // console.log(this.titleAndMetatagsArray[id]);
    this.titleService.setTitle(this.titleAndMetatagsArray[id].title);
    this.metaTagService.addTags([
      { name: "author", content: "Akscellence Info" },
      { name: "robots", content: "index, follows" }
    ]);

    this.metaTagService.updateTag({
      name: "keywords",
      content: this.titleAndMetatagsArray[id].keywordContent
    });
    this.metaTagService.updateTag({
      name: "description",
      content: this.titleAndMetatagsArray[id].descriptionContent
    });
    this.metaTagService.updateTag({
      property: "og:image",
      content: this.titleAndMetatagsArray[id].image
    });
    this.metaTagService.updateTag({
      property:"og:description",
      content: this.titleAndMetatagsArray[id].descriptionContent
    })
  }
}
