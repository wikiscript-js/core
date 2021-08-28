import {
	ApiError
} from './ApiError'

export class ArticleExistsError extends ApiError {
	static readonly code = 'articleexists'

	constructor() {
		super( 'The destination article already exists and is not a redirect to the source article.' )
	}
}