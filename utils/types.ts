export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: {
    from: number;
    to?: number;
  };
  enableModal?: boolean | null;
  modalContent?: {
    enableAditionalNote?: boolean | null;
    additionalNote?:
      | {
          note?: string | null;
          id?: string | null;
        }[]
      | null;
    description?: string | null;
    featuresTitle?: string | null;
    features?:
      | {
          feature?: string | null;
          id?: string | null;
        }[]
      | null;
    note?: string | null;
  };
}
