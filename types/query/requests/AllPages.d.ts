interface IApiQueryAllpagesRequest extends IApiQueryRequest {
	apfrom?: string
	apcontinue?: string
	apto?: string
	apprefix?: string
	apnamespace?: number | string
	apfilterredir?: 'all' | 'nonredirects' | 'redirects'
	apminsize?: number
	apmaxsize?: number
	aplimit?: number | 'max'
	apfilterlanglinks?: 'all' | 'withlanglinks' | 'withoutlanglinks'
}