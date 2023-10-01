import { OrderItemInterface } from 'interfaces/order-item';
import { ReviewInterface } from 'interfaces/review';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price?: number;
  stock?: number;
  category?: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  order_item?: OrderItemInterface[];
  review?: ReviewInterface[];
  company?: CompanyInterface;
  _count?: {
    order_item?: number;
    review?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  category?: string;
  company_id?: string;
}
