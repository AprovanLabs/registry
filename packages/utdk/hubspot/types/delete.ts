export type DeleteOperations = {
  /**
   * Archive a contact
   */
  contactIdArchive: (input: {
    contactId: string;
  }) => Promise<undefined>;
};
