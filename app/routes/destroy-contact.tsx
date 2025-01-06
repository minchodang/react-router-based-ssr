import { redirect } from 'react-router';
import type { Route } from './+types/destroy-contact';

import { deleteContact } from 'app/data';

export async function action({ params }: Route.ActionArgs) {
    await deleteContact(params.contactId);
    return redirect('/');
}
