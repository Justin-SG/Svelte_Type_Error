import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	doSomethingCool: async () => {
        // This code is just here so ActionData in './$types' containts some random types
        if (`` == '') {
            return fail(400, {justSomeRandomStuff: 2})
        }
        return {success: true}
    }
}