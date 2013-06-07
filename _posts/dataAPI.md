{{{
	"title": "SHARE's Data API",
	"date": "6/6/2013"
}}}

An _API_, or _Application Programming Interface_, is a means of quickly querying some datastore for information. In [SHARE's](http://salmonhabitat.org) case, this means having a cheap, fast way to access information pertaining to our completed projects.

For example, let's say you wanted to view all the public data available pertaining to SHARE's completed LWD additions. All that would require is to point your browser to `http://salmonhabitat.org/api/projects/lwd`, and you'd get a nice [JSON](http://www.json.org/) representation of our available data?

Rather just have a shapefile? **Easy**. `http://salmonhabitat.org/api/projects/lwd/download`.

### Available datasets

1 **Crossings** - [`http://salmonhabitat.org/api/projects/crossings`](http://salmonhabitat.org/api/projects/crossings)

> Includes _Open-Bottom Arches_, _Decommissions_, and _Bridges_.

2 **LWD** - [`http://salmonhabitat.org/api/projects/lwd`](http://salmonhabitat.org/api/projects/lwd)

> Includes both production and study sites. We'll be posting more information on our work with LWD additions shortly…
	
3 **Historic Features** - [`http://salmonhabitat.org/api/projects/historic`](http://salmonhabitat.org/api/projects/historic)

> Remnant log drive dams, armored channels, wingwalls, etc. This dataset is certainly incomplete. In fact, it will likely always be incomplete. There are many undiscovered features in Downeast Maine, and while we're trying to locate them all, we're well aware of the scope of such a task.

### Using the datasets

By default, output is **JSON**.

```
id: 1,
watershed: "East Machias",
trib: "Seavey Stream",
type: "study",
```

To download the data as a **shapefile**, append `/download` to any of the previously mentioned queries. IE: [`http://salmonhabitat.org/api/projects/crossings/download`](http://salmonhabitat.org/api/projects/crossings/download)


### Questions?

Send an email to [Jacques](mailto:jacquestardie+api@gmail.com). He'd love to hear how this could be improved for you.

