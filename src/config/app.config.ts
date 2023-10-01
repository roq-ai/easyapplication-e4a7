interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'easyapplication',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View products', 'Place orders', 'Review products', 'View order status'],
  ownerAbilities: [
    'Manage user information',
    'Manage company information',
    'Manage product details',
    'Manage order and order items',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/d4649743-c312-45d0-be84-c575d8fe35af',
};
