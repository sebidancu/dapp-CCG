/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  useGetAccountInfo,
  transactionServices,
  refreshAccount,
  useGetNetworkConfig,
  useGetPendingTransactions
} from '@elrondnetwork/dapp-core';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { getTransactions } from 'apiRequests';
import { contractAddress } from 'config';
import TransactionsList from './TransactionsList';
import { StateType } from './types';
import { Button, Card, Col, Container, Form, Row, Dropdown, DropdownButton } from 'react-bootstrap';
import axios, { AxiosResponse } from 'axios';
import { AbiRegistry, Address, AddressValue, ContractFunction, ResultsParser, SmartContract, SmartContractAbi } from '@elrondnetwork/erdjs/out';
import { mode, colectienft } from 'config';
import Chart from './Chart';


const MintForm = () => {
  const account = useGetAccountInfo();
  const { hasPendingTransactions } = useGetPendingTransactions();
  //const { network } = useGetNetworkConfig();
  const { address } = account;

  const [secondsLeft, setSecondsLeft] = React.useState<number>();
  const [items, setItems] = React.useState([]);
  const [price, setPrice] = React.useState<any>();
  const [token, setToken] = React.useState<any>();
  const [nftnumber, setNftnumber] = React.useState<number>(1);
  const [pricetx, setPricetx] = React.useState<any>();
  const /*transactionSessionId*/[, setTransactionSessionId] = React.useState<
    string | null
  >(null);
  const { sendTransactions } = transactionServices;

  function numtoHex(num: number) {
    let result = num.toString(16);
    if (result.length % 2 == 1) {
      result = '0' + result;
    }
    return result;
  }

  useEffect(() => {
    (async () => {
      await axios
        .get(
          `https://${mode}api.elrond.com/accounts/${address}/nfts?collection=${colectienft}`
        )
        .then(
          async (result) => {
            setItems(result.data);
            console.log(result.data[0]);
            setToken(result.data[0].collection);
            //console.log(items[0].collection);
          },
          (error) => {
            console.log(error);
          }
        )
        .catch((err) => {
          console.log(err.message);
        });
    })();
  }, [address]);

  return (

    <Container>
      {items.length > 0 ?
        <>
        <h1>Token ID:  <b>{token}</b></h1>
        <h2>
          You have <b>{items.length}</b> NFTs in your wallet.
        </h2>
        <Chart></Chart>
        </>
        :
        <>
          You don`t own any NFTs from collection {token}
        </>
      }
      {/* <Row>
        <Col>
          Stanga
        </Col>
        <Col>
          Dreapta
        </Col>
      </Row> */}
    </Container>
  );
};

export default MintForm;
