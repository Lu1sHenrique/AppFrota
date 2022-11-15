import React, { useState } from 'react';
import {
  Text, 
  View, 
  TouchableOpacity, 
  ActivityIndicator,
  ScrollView,
  Modal
} from 'react-native';

//libs
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialsIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import AwesomeAlert from 'react-native-awesome-alerts';
//pages
import styles from './style'
import PageHeader from '../../../Components/PageHeader/PageHeader'

import colors from '../../../Utils/colors';

export default function DetalheChecklist({route}){

  const [showMsgAlert, setShowMsgAlert] = useState(false)
  const [msgAlert, setMsgAlert] = useState("")
  const [exibeModalFoto, setExibeModalFoto] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const hidemsgAlert = () => (
    setShowMsgAlert(false)
  );

  const data = route;

  async function gerarRel(){
    setIsLoading(true)

    const htmlContent = `
        <html>
          <head>
            <meta charset="utf-8">
            <title>Máxima Segurança</title>
            <link rel="license" href="https://www.opensource.org/licenses/mit-license/">
            <style>
              ${htmlStyles}
            </style>
          </head>
          <body>
            <header>
              <h1>Máxima Segurança</h1>
              <address>
                <p>${data.params.paramKey.codigoChecklistCombustao}</p>
                <p>${data.params.paramKey.codigoChecklistCombustao}</p>
                <p>${data.params.paramKey.codigoChecklistCombustao}</p>
              </address>
            </header>
            <article>
              <h1>Recipient</h1>
              <address>
                <p>${data.params.paramKey.codigoChecklistCombustao}<br>c/o ${data.params.paramKey.codigoChecklistCombustao}</p>
              </address>
              <table class="meta">
                <tr>
                  <th><span>Máxima Segurança #</span></th>
                  <td><span>101138</span></td>
                </tr>
                <tr>
                  <th><span>Date</span></th>
                  <td><span>${new Date()}</span></td>
                </tr>
                <tr>
                  <th><span>Amount Due</span></th>
                  <td><span id="prefix">$</span><span>${data.params.paramKey.codigoChecklistCombustao}</span></td>
                </tr>
              </table>
              <table class="inventory">
                <thead>
                  <tr>
                    <th><span>Item</span></th>
                    <th><span>Description</span></th>
                    <th><span>Rate</span></th>
                    <th><span>Quantity</span></th>
                    <th><span>Price</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span>Front End Consultation</span></td>
                    <td><span>Experience Review</span></td>
                    <td><span data-prefix>$</span><span>${data.params.paramKey.codigoChecklistCombustao}</span></td>
                    <td><span>4</span></td>
                    <td><span data-prefix>$</span><span>${data.params.paramKey.codigoChecklistCombustao}</span></td>
                  </tr>
                </tbody>
              </table>
              <table class="balance">
                <tr>
                  <th><span>Total</span></th>
                  <td><span data-prefix>$</span><span>${data.params.paramKey.codigoChecklistCombustao}</span></td>
                </tr>
                <tr>
                  <th><span>Amount Paid</span></th>
                  <td><span data-prefix>$</span><span>0.00</span></td>
                </tr>
                <tr>
                  <th><span>Balance Due</span></th>
                  <td><span data-prefix>$</span><span>${data.params.paramKey.codigoChecklistCombustao}</span></td>
                </tr>
              </table>
            </article>
            <aside>
              <h1><span>Additional Notes</span></h1>
              <div>
                <p>A finance charge of 1.5% will be made on unpaid balances after 30 days.</p>
              </div>
            </aside>
          </body>
        </html>
      `;

    let options = {
      html: htmlContent,
      fileName: 'Teste',
      directory: 'Documents',
    };
  
    let file = await RNHTMLtoPDF.convert(options)
    //alert(file.filePath);
    console.log(file.filePath)
    setIsLoading(false)
    setShowMsgAlert(true)
    setMsgAlert("Relatório "+options.fileName+" gerado com sucesso na pasta "+options.directory)
  }

  const navigation = useNavigation();

  const [codigoChecklistCombustao] = useState(route.params.paramKey.codigoChecklistCombustao)
  const [codigoChecklistEletrica] = useState(route.params.paramKey.codigoChecklistEletrica)
  
    return(
      <View style={{backgroundColor: colors.white}}>

      <Modal
      visible={exibeModalFoto}
      animationType='slide'
      transparent={true}
      >
        <View
        style={styles.containerModal}
        >
          <View style={{flexDirection: 'row', alignSelf: 'flex-end', marginTop: 10}}>
            <TouchableOpacity
            style={styles.ButtonDownFoto}
            >
              <Text style={styles.txtButtonFechar}>Baixar foto</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => setExibeModalFoto(false)}
            style={styles.ButtonFecharModal}
            >
              <Text style={styles.txtButtonFechar}>X</Text>
            </TouchableOpacity>
          </View>
          
          <Text>{route.params.paramKey.fotoBateriaIncial}</Text>
        </View> 
      </Modal>
       
      <PageHeader/>
          
          <View style={styles.ContainerButtonBack}> 
            <TouchableOpacity
              style={styles.ButtonBack}
              onPress={() => navigation.goBack()}
              >
              <IconFeather style={styles.IconBack} name="arrow-left-circle" size={35} />
              <Text style={{fontSize: 33,fontFamily: 'BebasNeue-Regular', color: colors.gray}}>{route.params.paramKey.codigoChecklistCombustao ? "Detalhes checklist combustão" : "Detalhes checklist elétrica"}</Text>
            </TouchableOpacity>
          </View>

            {
            isLoading ? (
              <ActivityIndicator style={{flex: 1, display: 'flex', paddingVertical: 10}} size="large" color={colors.red}/>
            ) : null           
            }
            
          <ScrollView style={{width: '100%'}}>
          <View style={{flexDirection: 'row', marginVertical: 10, width: '50%'}}>
            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Código checklist: <Text style={styles.txtValue}>{route.params.paramKey.codigoChecklistCombustao ? codigoChecklistCombustao : codigoChecklistEletrica}</Text></Text>
            </View>

            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Data envio: <Text style={styles.txtValue}>{route.params.paramKey.dataEnvio.substr(0,12)}</Text></Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 10, width: '50%'}}>
            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Hora envio: <Text style={styles.txtValue}>{route.params.paramKey.horaEnvio}</Text></Text>
            </View>
          </View>

          {codigoChecklistCombustao ?
            <View style={{flexDirection: 'row', marginVertical: 10, width: '50%'}}>
              <View style={{marginTop: 15}}>
                <Text style={styles.txtLabel}>Carro Máxima: <Text style={styles.txtValue}>{route.params.paramKey.carroMaxima}</Text></Text>
              </View>

              <View style={{marginTop: 15}}>
                <Text style={styles.txtLabel}>Carro Reserva: <Text style={styles.txtValue}>{route.params.paramKey.carroReserva}</Text></Text>
              </View>
            </View> : 
            <View style={{flexDirection: 'row', marginVertical: 10, width: '50%'}}>
              <View style={{marginTop: 15}}>
                <Text style={styles.txtLabel}>Bateria Inicial: <Text style={styles.txtValue}>{route.params.paramKey.bateriaInicial}</Text></Text>
              </View>

              <View style={{marginTop: 15}}>
                <Text style={styles.txtLabel}>Bateria Final: <Text style={styles.txtValue}>{route.params.paramKey.bateriaFinal}</Text></Text>
              </View>
            </View> 
          }
      
          {codigoChecklistEletrica ? 
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Diferença Bateria: <Text style={styles.txtValue}>{decodeURIComponent(route.params.paramKey.calcDiferenca.replaceAll('+', ' '))}</Text></Text>
            </View> 
          </View>: null
          }

          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Departamento: <Text style={styles.txtValue}>{decodeURIComponent(route.params.paramKey.departamento.replaceAll('+', ' '))}</Text></Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Condutor: <Text style={styles.txtValue}>{decodeURIComponent(route.params.paramKey.condutor.replaceAll('+', ' '))}</Text></Text>
            </View>
          </View>
          

          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <View style={{marginTop: 15}}>
              <Text style={styles.txtLabel}>Placa do veículo: <Text style={styles.txtValue}>{route.params.paramKey.placaVeiculo}</Text></Text>
            </View>
          </View>  

          
            {codigoChecklistCombustao ?
            <View style={{flexDirection: 'row', marginVertical: 10}}>
              <View style={{marginTop: 10}}>
                <Text style={styles.txtLabel}>KM Inicial: <Text style={styles.txtValue}>{route.params.paramKey.kmInicial}</Text></Text>
              </View>
              
              <View style={{marginTop: 10}}>
                <Text style={styles.txtLabel}>KM Final: <Text style={styles.txtValue}>{route.params.paramKey.kmFinal}</Text></Text>
              </View>

              <View style={{marginTop: 10}}>
                <Text style={styles.txtLabel}>Diferença Km: <Text style={styles.txtValue}>{route.params.paramKey.calcDiferenca}</Text></Text>
              </View>
            </View> : null
            } 
          

          {codigoChecklistCombustao ?
          <>
          <View style={{flexDirection: 'row', marginVertical: 15}}>
            <View style={{marginTop: 10}}>
              <Text style={styles.txtLabel}>Rota ronda 1: <Text style={styles.txtValue}>{route.params.paramKey.rotaRonda1}</Text></Text>
            </View>

            <View style={{marginTop: 10}}>
              <Text style={styles.txtLabel}>Rota ronda 2: <Text style={styles.txtValue}>{route.params.paramKey.rotaRonda2}</Text></Text>
            </View>

            <View style={{marginTop: 10}}>
              <Text style={styles.txtLabel}>Rota ronda 3: <Text style={styles.txtValue}>{route.params.paramKey.rotaRonda3}</Text></Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 15}}>
            <View style={{marginTop: 10}}>
              <Text style={styles.txtLabel}>Troca óleo: <Text style={styles.txtValue}>{route.params.paramKey.trocaOleo}</Text></Text>
            </View>

            <View style={{marginTop: 10}}>
              <Text style={styles.txtLabel}>Pneu: <Text style={styles.txtValue}>{route.params.paramKey.pneu}</Text></Text>
            </View>

            <View style={{marginTop: 10}}>
              <Text style={styles.txtLabel}>Correias: <Text style={styles.txtValue}>{route.params.paramKey.correias}</Text></Text>
            </View>
          </View>
          </> : null
          } 

          {codigoChecklistCombustao ?
          <>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection: 'row'}}>
            
            <View style={{marginStart: 10, marginEnd: 10, marginTop: 10}}>
                  <TouchableOpacity style={styles.buttonDown}
                  onPress={() => setExibeModalFoto(true)}
                  >
                    <IconFeather style={{marginRight: 15}} name="eye" size={25} color={colors.white}/>
                    <Text style={{fontSize: 20, fontFamily: 'BebasNeue-Regular', color: colors.white}}>Visualizar foto Km Inicial</Text>
                  </TouchableOpacity>
            </View>

            <View style={{marginStart: 10, marginEnd: 10, marginTop: 10}}>
                <TouchableOpacity style={styles.buttonDown}
                onPress={() => setExibeModalFoto(true)}
                >
                  <IconFeather style={{marginRight: 15}} name="eye" size={25} color={colors.white}/>
                  <Text style={{fontSize: 20, fontFamily: 'BebasNeue-Regular', color: colors.white}}>Visualizar foto Km Final</Text>
                </TouchableOpacity>
            </View> 

            <View style={{marginStart: 10, marginEnd: 45, marginTop: 10}}>
                  <TouchableOpacity 
                  style={styles.buttonDown}
                  onPress={() => gerarRel()}
                  >
                    <IconFeather style={{marginRight: 15}} name="download" size={25} color={colors.white}/>
                    <Text style={{fontSize: 20, fontFamily: 'BebasNeue-Regular', color: colors.white}}>Baixar relatório</Text>
                    </TouchableOpacity>
            </View>
            </ScrollView>
            <View style={styles.containerIconArrowButtons}>
              <View style={styles.IconArrowButtons}>
                <IconMaterialsIcons name="keyboard-arrow-right" size={30} color={colors.red}/>
              </View>
            </View>
          </> 
            : 
          <>
            <View style={{marginStart: 10, marginEnd: 10, marginTop: 10}}>
                <TouchableOpacity style={styles.buttonDown}
                onPress={() => setExibeModalFoto(true)}
                >
                  <IconFeather style={{marginRight: 15}} name="eye" size={25} color={colors.white}/>
                  <Text style={{fontSize: 20, fontFamily: 'BebasNeue-Regular', color: colors.white}}>Visualizar foto Bateria Inicial</Text>
                </TouchableOpacity>
            </View> 
           
            <View style={{marginStart: 10, marginEnd: 10, marginTop: 10}}>
              <TouchableOpacity style={styles.buttonDown}
              onPress={() => setExibeModalFoto(true)}
              >
                <IconFeather style={{marginRight: 15}} name="eye" size={25} color={colors.white}/>
                <Text style={{fontSize: 20, fontFamily: 'BebasNeue-Regular', color: colors.white}}>Visualizar foto Bateria Final</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginStart: 10, marginEnd: 10, marginTop: 10}}>
              <TouchableOpacity 
              style={styles.buttonDown}
              onPress={() => gerarRel()}
              >
                <IconFeather style={{marginRight: 15}} name="download" size={25} color={colors.white}/>
                <Text style={{fontSize: 20, fontFamily: 'BebasNeue-Regular', color: colors.white}}>Baixar relatório</Text>
              </TouchableOpacity>
            </View>      
          </>
        }
      </ScrollView>

        <AwesomeAlert
          contentContainerStyle={styles.containerAlert}
          confirmButtonStyle={styles.ButtonAlert}
          confirmButtonTextStyle={styles.txtButtonAlert}
          messageStyle={styles.txtTitleAlert}
          show={showMsgAlert}
          showProgress={false}
          message={msgAlert}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor={colors.red}
          onConfirmPressed={() => {
            hidemsgAlert();
          }}
        />
      </View>
)
}
    
const htmlStyles = `
*{
  border: 0;
  box-sizing: content-box;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
  vertical-align: top;
}
h1 { font: bold 100% sans-serif; letter-spacing: 0.5em; text-align: center; text-transform: uppercase; }
/* table */
table { font-size: 75%; table-layout: fixed; width: 100%; }
table { border-collapse: separate; border-spacing: 2px; }
th, td { border-width: 1px; padding: 0.5em; position: relative; text-align: left; }
th, td { border-radius: 0.25em; border-style: solid; }
th { background: #EEE; border-color: #BBB; }
td { border-color: #DDD; }
/* page */
html { font: 16px/1 'Open Sans', sans-serif; overflow: auto; }
html { background: #999; cursor: default; }
body { box-sizing: border-box;margin: 0 auto; overflow: hidden; padding: 0.25in; }
body { background: #FFF; border-radius: 1px; box-shadow: 0 0 1in -0.25in rgba(0, 0, 0, 0.5); }
/* header */
header { margin: 0 0 3em; }
header:after { clear: both; content: ""; display: table; }
header h1 { background: #000; border-radius: 0.25em; color: #FFF; margin: 0 0 1em; padding: 0.5em 0; }
header address { float: left; font-size: 75%; font-style: normal; line-height: 1.25; margin: 0 1em 1em 0; }
header address p { margin: 0 0 0.25em; }
header span, header img { display: block; float: right; }
header span { margin: 0 0 1em 1em; max-height: 25%; max-width: 60%; position: relative; }
header img { max-height: 100%; max-width: 100%; }
/* article */
article, article address, table.meta, table.inventory { margin: 0 0 3em; }
article:after { clear: both; content: ""; display: table; }
article h1 { clip: rect(0 0 0 0); position: absolute; }
article address { float: left; font-size: 125%; font-weight: bold; }
/* table meta & balance */
table.meta, table.balance { float: right; width: 36%; }
table.meta:after, table.balance:after { clear: both; content: ""; display: table; }
/* table meta */
table.meta th { width: 40%; }
table.meta td { width: 60%; }
/* table items */
table.inventory { clear: both; width: 100%; }
table.inventory th { font-weight: bold; text-align: center; }
table.inventory td:nth-child(1) { width: 26%; }
table.inventory td:nth-child(2) { width: 38%; }
table.inventory td:nth-child(3) { text-align: right; width: 12%; }
table.inventory td:nth-child(4) { text-align: right; width: 12%; }
table.inventory td:nth-child(5) { text-align: right; width: 12%; }
/* table balance */
table.balance th, table.balance td { width: 50%; }
table.balance td { text-align: right; }
/* aside */
aside h1 { border: none; border-width: 0 0 1px; margin: 0 0 1em; }
aside h1 { border-color: #999; border-bottom-style: solid; }
`;