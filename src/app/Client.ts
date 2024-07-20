import axios, {AxiosInstance, AxiosPromise, AxiosRequestConfig} from 'axios';
import {showToast} from '../features/toast';
import {store} from '../app/store';

export class Client {
  private _axiosInstance!: AxiosInstance;

  constructor(public baseUrl: string) {
    this.baseUrl = baseUrl;
    this.createAxiosInstance();
  }

  private defaultOptions = (): AxiosRequestConfig => {
    let netTimeout = 60 * 1000;
    const options = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: netTimeout >= 10 * 1000 ? netTimeout : 10 * 1000,
    };
    return options;
  };

  private createAxiosInstance() {
    this._axiosInstance = axios.create(this.defaultOptions());

    this._axiosInstance.interceptors.response.use(
      (response: any) => {
        try {
          console.log(
            'Axios call: ',
            response.status,
            response.request.responseURL,
            response,
          );
        } catch (err) {}
        return response;
      },
      async (err: any) => {
        try {
          const errorMessage = `Error: ${err.response?.status} - ${
            err.response?.data?.message || err.message
          }`;
          store.dispatch(showToast(errorMessage));

          console.error(
            'Axios call err: ',
            err.response.status,
            err.config.baseURL + err.config.url,
            err,
          );
        } catch (err) {}
        return Promise.reject(err);
      },
    );
  }

  get<T>(endpoint: string, config: AxiosRequestConfig = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!.get<T>(`${endpoint}`, config)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  post<T>(
    endpoint: string,
    data: {},
    config: AxiosRequestConfig = {},
  ): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!.post<T>(`${endpoint}`, data, config)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  put<T>(
    endpoint: string,
    data: {},
    config: AxiosRequestConfig = {},
  ): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!.put<T>(`${endpoint}`, data, config)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  patch<T>(
    endpoint: string,
    data: {},
    config: AxiosRequestConfig = {},
  ): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!.patch<T>(`${endpoint}`, data, config)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  delete<T>(endpoint: string, config: AxiosRequestConfig = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!.delete<T>(`${endpoint}`, config)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
