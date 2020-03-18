import React, {Component} from 'react'
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Picker,
  Image,
} from 'react-native'
import {CustomHeader2} from '../index'
//{}를 치지 않으면 오류 발생
import {ManagerListItem} from './ManagerListItem'
import {IMAGE} from '../constants/Images'

export class PayScreen extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <CustomHeader2
          title='결제하기'
          isNeedAddButton={false}
          fruit='apple'
          navigation={this.props.navigation}
        />
        <View>
          <View
            style={{
              height: 1,
              backgroundColor: '#fbfbfb',
            }}
          />
          <View
            style={{
              height: 2,
              backgroundColor: '#eeeeee',
            }}
          />
        </View>
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              height: 216,
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 17,
                marginStart: 22,
                marginEnd: 22,
                alignItems: 'center',
              }}>
              <Text style={{width: 81, fontSize: 17}}>예약자</Text>
              <TextInput
                style={{
                  flex: 1,
                  height: 41,
                  borderWidth: 1,
                  borderColor: '#b3b3b3',
                  backgroundColor: '#f1f1f1',
                  paddingStart: 11,
                  fontSize: 17,
                }}
                placeholder='홍길동'
                placeholderTextColor='#b3b3b3'
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 11,
                marginStart: 22,
                marginEnd: 22,
                alignItems: 'center',
              }}>
              <Text style={{width: 81, fontSize: 17}}>연락처</Text>
              <TextInput
                style={{
                  flex: 1,
                  height: 41,
                  borderWidth: 1,
                  borderColor: '#b3b3b3',
                  backgroundColor: '#f1f1f1',
                  paddingStart: 11,
                  fontSize: 17,
                }}
                placeholder='010-1234-5678'
                placeholderTextColor='#b3b3b3'
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 9,
                marginStart: 22,
                marginEnd: 22,
              }}>
              <Text style={{width: 81, marginTop: 5, fontSize: 17}}>
                요청사항
              </Text>
              <TextInput
                style={{
                  flex: 1,
                  height: 71,
                  borderWidth: 1,
                  borderColor: '#b3b3b3',
                  backgroundColor: 'white',
                  paddingStart: 11,
                  fontSize: 17,
                }}
                placeholder='요청사항을 남겨주세요'
                placeholderTextColor='#b3b3b3'
              />
            </View>
          </View>
          <View>
            <View
              style={{
                height: 1,
                backgroundColor: '#fbfbfb',
              }}
            />
            <View
              style={{
                height: 7,
                backgroundColor: '#f6f6f6',
              }}
            />
            <View
              style={{
                height: 1,
                backgroundColor: '#fbfbfb',
              }}
            />
          </View>
          <View
            style={{
              height: 113,
              flexDirection: 'row',
            }}>
            <View style={{flex: 1, marginTop: 20, marginStart: 20}}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>차량정보</Text>
              <Text style={{marginTop: 7, fontSize: 17, color: '#868686'}}>
                아우디/A3 카브리올레 화이트{'\n'}12호 1234
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 61,
                height: 27,
                marginTop: 44,
                marginEnd: 23,
                borderRadius: 31,
                backgroundColor: '#e5e5e5',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => this.props.navigation.navigate('Pay')}>
              <Text style={{fontSize: 14}}>수정</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{
                height: 1,
                backgroundColor: '#fbfbfb',
              }}
            />
            <View
              style={{
                height: 7,
                backgroundColor: '#f6f6f6',
              }}
            />
            <View
              style={{
                height: 1,
                backgroundColor: '#fbfbfb',
              }}
            />
          </View>

          <Text
            style={{
              marginTop: 20,
              marginStart: 20,
              fontSize: 17,
              fontWeight: 'bold',
            }}>
            예약정보
          </Text>

          <View
            style={{
              height: 1,
              marginTop: 14,
              marginStart: 20,
              marginEnd: 20,
              backgroundColor: '#f6f6f6',
            }}
          />

          <View
            style={{
              height: 56,
              flexDirection: 'row',
              marginStart: 20,
              alignItems: 'center',
            }}>
            <Text style={{width: 90, fontSize: 20, color: '#8f8f8f'}}>
              날짜/시간
            </Text>
            <Text style={{fontSize: 20}}>2020년 3월 1일 월요일 오후 1:30</Text>
          </View>

          <View
            style={{
              height: 1,
              marginStart: 20,
              marginEnd: 20,
              backgroundColor: '#f6f6f6',
            }}
          />

          <View
            style={{
              height: 56,
              flexDirection: 'row',
              marginStart: 20,
              alignItems: 'center',
            }}>
            <Text style={{width: 90, fontSize: 20, color: '#8f8f8f'}}>
              매니저
            </Text>
            <Text style={{fontSize: 20}}>오토카지 매니저 1</Text>
          </View>

          <View
            style={{
              height: 1,
              marginStart: 20,
              marginEnd: 20,
              backgroundColor: '#f6f6f6',
            }}
          />

          <View
            style={{
              height: 56,
              flexDirection: 'row',
              marginStart: 20,
              alignItems: 'center',
            }}>
            <Text style={{width: 90, fontSize: 20, color: '#8f8f8f'}}>
              선택상품
            </Text>
            <Text style={{fontSize: 20}}>외부세차</Text>
          </View>

          <View
            style={{
              height: 1,
              marginStart: 20,
              marginEnd: 20,
              backgroundColor: '#f6f6f6',
            }}
          />

          <View
            style={{
              height: 56,
              flexDirection: 'row',
              marginStart: 20,
              alignItems: 'center',
            }}>
            <Text style={{width: 90, fontSize: 20, color: '#8f8f8f'}}>
              선택옵션
            </Text>
            <Text style={{fontSize: 20}}>엔진룸 + 철분/타르제거</Text>
          </View>

          <View>
            <View
              style={{
                height: 1,
                backgroundColor: '#fbfbfb',
              }}
            />
            <View
              style={{
                height: 7,
                backgroundColor: '#f6f6f6',
              }}
            />
            <View
              style={{
                height: 1,
                backgroundColor: '#fbfbfb',
              }}
            />
          </View>

          <Text
            style={{
              marginTop: 20,
              marginStart: 20,
              fontSize: 17,
              fontWeight: 'bold',
            }}>
            상품권 및 바우처 사용
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginStart: 20,
              marginEnd: 20,
              marginTop: 14,
            }}>
            <View
              style={{
                height: 42,
                flex: 1,
                flexDirection: 'row',
                borderRadius: 2,
                borderWidth: 2,
                borderColor: '#d9d9d9',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  marginStart: 16,
                  flex: 1,
                  fontSize: 15,
                  color: '#d9d9d9',
                }}>
                상품권 선택
              </Text>
              <Image
                style={{
                  width: 13,
                  height: 13,
                  marginEnd: 12,
                }}
                source={IMAGE.ICON_DOWN_ARROW}
              />
            </View>

            <TouchableOpacity
              style={{
                width: 89,
                height: 42,
                marginStart: 9,
                borderRadius: 2,
                backgroundColor: '#d8d8d8',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => this.props.navigation.navigate('Pay')}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>적용</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginStart: 20,
              marginEnd: 20,
              marginTop: 10,
            }}>
            <View
              style={{
                height: 42,
                flex: 1,
                flexDirection: 'row',
                borderRadius: 2,
                borderWidth: 2,
                borderColor: '#d9d9d9',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  marginStart: 16,
                  flex: 1,
                  fontSize: 15,
                  color: '#d9d9d9',
                }}>
                바우처 선택
              </Text>
              <Image
                style={{
                  width: 13,
                  height: 13,
                  marginEnd: 12,
                }}
                source={IMAGE.ICON_DOWN_ARROW}
              />
            </View>

            <TouchableOpacity
              style={{
                width: 89,
                height: 42,
                marginStart: 9,
                borderRadius: 2,
                backgroundColor: '#d8d8d8',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => this.props.navigation.navigate('Pay')}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>적용</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: 21,
            }}>
            <View
              style={{
                height: 1,
                backgroundColor: '#fbfbfb',
              }}
            />
            <View
              style={{
                height: 7,
                backgroundColor: '#f6f6f6',
              }}
            />
            <View
              style={{
                height: 1,
                backgroundColor: '#fbfbfb',
              }}
            />
          </View>
          <Text
            style={{
              marginTop: 20,
              marginStart: 20,
              fontSize: 17,
              fontWeight: 'bold',
            }}>
            포인트 사용
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 11,
              marginStart: 20,
            }}>
            <Text
              style={{
                flex: 1,
                fontSize: 13,
                color: '#d8d8d8',
              }}>
              사용가능 포인트
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 13,
              }}>
              100,000P
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginStart: 20,
              marginEnd: 20,
              marginTop: 10,
            }}>
            <View
              style={{
                height: 42,
                flex: 1,
                flexDirection: 'row',
                borderRadius: 2,
                borderWidth: 2,
                borderColor: '#d9d9d9',
                alignItems: 'center',
              }}>
              <TextInput
                style={{
                  marginStart: 16,
                  flex: 1,
                  fontSize: 15,
                }}
              />

              <Text
                style={{
                  fontSize: 15,
                  marginEnd: 14,
                  fontWeight: 'bold',
                }}>
                P
              </Text>
            </View>

            <TouchableOpacity
              style={{
                width: 89,
                height: 42,
                marginStart: 9,
                borderRadius: 2,
                backgroundColor: '#d8d8d8',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => this.props.navigation.navigate('Pay')}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>전액사용</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 23,
            }}>
            <View
              style={{
                height: 1,
                backgroundColor: '#fbfbfb',
              }}
            />
            <View
              style={{
                height: 7,
                backgroundColor: '#f6f6f6',
              }}
            />
            <View
              style={{
                height: 1,
                backgroundColor: '#fbfbfb',
              }}
            />
          </View>

          <Text
            style={{
              marginTop: 20,
              marginStart: 20,
              fontSize: 17,
              fontWeight: 'bold',
            }}>
            최종 결제 금액
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginStart: 20,
              marginEnd: 27,
              marginTop: 15,
            }}>
            <Text style={{flex: 1, fontSize: 17, color: '#8f8f8f'}}>
              상품 총 금액
            </Text>
            <Text style={{fontSize: 17}}>170,000원</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginStart: 20,
              marginEnd: 27,
              marginTop: 12,
            }}>
            <Text style={{flex: 1, fontSize: 17, color: '#8f8f8f'}}>
              상품권 사용
            </Text>
            <Text style={{fontSize: 17}}>0원</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginStart: 20,
              marginEnd: 27,
              marginTop: 12,
            }}>
            <Text style={{flex: 1, fontSize: 17, color: '#8f8f8f'}}>
              바우처 사용
            </Text>
            <Text style={{fontSize: 17}}>-3,400원</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginStart: 20,
              marginEnd: 27,
              marginTop: 12,
            }}>
            <Text style={{flex: 1, fontSize: 17, color: '#8f8f8f'}}>
              포인트 사용
            </Text>
            <Text style={{fontSize: 17}}>-5,000원</Text>
          </View>

          <View
            style={{
              height: 1,
              marginStart: 20,
              marginEnd: 27,
              marginTop: 12,
              backgroundColor: '#8f8f8f',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginStart: 20,
              marginEnd: 27,
              marginTop: 26,
              alignItems: 'center',
            }}>
            <Text style={{flex: 1, fontSize: 17, color: '#8f8f8f'}}>
              총 결제 금액
            </Text>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>161,600원</Text>
          </View>

          <Text
            style={{
              flex: 1,
              marginStart: 20,
              marginEnd: 27,
              fontSize: 15,
              color: '#8f8f8f',
              textAlign: 'right',
            }}>
            (OO회사 전용 상품으로 원금액의 20%할인이 적용됨)
          </Text>
          <View
            style={{
              marginTop: 21,
            }}>
            <View
              style={{
                height: 1,
                backgroundColor: '#fbfbfb',
              }}
            />
            <View
              style={{
                height: 7,
                backgroundColor: '#f6f6f6',
              }}
            />
            <View
              style={{
                height: 1,
                backgroundColor: '#fbfbfb',
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              height: 59,
              flexDirection: 'row',
              paddingStart: 20,
              paddingEnd: 27,
              alignItems: 'center',
            }}>
            <Text
              style={{
                flex: 1,
                fontSize: 17,
              }}>
              약관동의
            </Text>
            <Image
              style={{
                width: 13,
                height: 13,
              }}
              source={IMAGE.ICON_DOWN_ARROW}
            />
          </TouchableOpacity>
          <View>
            <View
              style={{
                height: 1,
                backgroundColor: '#fbfbfb',
              }}
            />
            <View
              style={{
                height: 7,
                backgroundColor: '#f6f6f6',
              }}
            />
            <View
              style={{
                height: 1,
                backgroundColor: '#fbfbfb',
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                height: 70,
                flex: 1,
                backgroundColor: '#434343',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => this.handleOneTimeCarWashSelected()}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                이전
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 70,
                flex: 1,
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => this.props.navigation.navigate('ChooseDate')}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                결제하기
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
