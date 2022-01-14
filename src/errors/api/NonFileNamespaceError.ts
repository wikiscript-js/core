import {
	ApiError
} from './ApiError'

export class NonFileNamespaceError extends ApiError {
	static override readonly code = 'nonfilenamespace'

	constructor() {
		super( 'Cannot move file to non-file namespace.' )
	}
}
